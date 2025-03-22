// 替换为您的 Mapbox 访问令牌
const accessToken: string = 'pk.eyJ1IjoiaGF6ZWxpc2dvb2QiLCJhIjoiY204YXk0YTJyMGJmMDJqcHZhNHZuamltMyJ9.PFgJ4hEHDTUtsGBNA6VyAw';

// 定义位置坐标
const latitude: number = 151.2082944;
const longitude: number = -33.8698444;

// 定义搜索结果的类型
interface SearchResult {
  name: string;
  location: [number, number];
}

// 搜索附近的 Coles 和 Woolworths
const searchNearbySupermarkets = async (): Promise<SearchResult[]> => {
  const url: string = `https://api.mapbox.com/geocoding/v5/mapbox.places/Coles,Woolworths.json?proximity=${longitude},${latitude}&access_token=${accessToken}`;
  
  try {
    const response: Response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: any = await response.json();
    // 处理返回的数据，提取出超市信息
    const supermarkets: SearchResult[] = data.features.map((feature: any) => ({
      name: feature.text,
      location: feature.geometry.coordinates,
    }));
    return supermarkets;
  } catch (error) {
    console.error('Error fetching data from Mapbox API:', error);
    return [];
  }
};

// 调用函数并处理结果
searchNearbySupermarkets().then((supermarkets) => {
  console.log(supermarkets);
});
