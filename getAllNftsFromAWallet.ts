require('dotenv').config();
const apiKey = process.env.HELIUS_API_KEY;
const url = `https://mainnet.helius-rpc.com/?api-key=${apiKey}`;
const address = '9nBzWqwC7wZP2qbgt2UTWCrEYZNwWebyruZSRrhevKWy'

interface Group {
  group_key: string;
  group_value: string;
}

interface Asset {
  id: string;
  content: any; // You can define a more specific type if needed
  grouping: Group[];
  // Add other properties as needed
}

interface ApiResponse {
  result: {
    items: Asset[];
    nativeBalance: number;
    // Add other properties as needed
  };
}

const getAssetsWithNativeBalance = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAssetsByOwner',
      params: {
        ownerAddress: address,
        displayOptions: {
          showFungible: true,
          showNativeBalance: true,
        },
      },
    }),
  });

  const { result } = (await response.json()) as ApiResponse;
  
  // Modified logging part
  const collectionAddresses = [
    'DtJXwtEDbzhRvAfETjHtNyopS275QyvKS2RGBUc1hY4y',
    'SPpCU2d2wE8nA51EqPDzUQZqDDEAP2bGJzzbLio4Pcn',
    'Fvpn3WGqT8n5bgYuHdSr5xLS6V6GtYDS2w5jjhhS5s8z'
  ];
  
  const filteredAssets = result.items.filter((item: Asset) => 
    item.grouping && 
    item.grouping.some(group => 
      group.group_key === 'collection' && 
      collectionAddresses.includes(group.group_value)
    )
  );

  console.log("Total number of assets:", result.items.length);
  console.log(`Number of NS Burn NFTs:`, filteredAssets.length);
};

getAssetsWithNativeBalance();