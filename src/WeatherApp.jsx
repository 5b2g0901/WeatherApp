import { useState, useEffect } from 'react';

// 預設一些好玩的熱門城市座標（免 Key API 通常需要經緯度）
const CITIES = {
  '台北': { lat: 25.03, lon: 121.56, icon: '🏙️' },
  '東京': { lat: 35.67, lon: 139.65, icon: '🗼' },
  '紐約': { lat: 40.71, lon: -74.00, icon: '🗽' },
  '倫敦': { lat: 51.50, lon: -0.12, icon: '🎡' },
  '巴黎': { lat: 48.85, lon: 2.35, icon: '🗼' }
};

function WeatherApp() {
  const [currentCity, setCurrentCity] = useState('台北');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      
      const { lat, lon } = CITIES[currentCity];
      
      try {
        // 💡 串接完全免驗證、隨插即用的全球氣象 Open資料
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`;
        const response = await fetch(url);
        
        if (!response.ok) throw new Error('天氣伺服器罷工中...');
        const data = await response.json();
        
        if (data && data.current_weather) {
          setWeatherData(data.current_weather);
        } else {
          throw new Error('找不到該地區的氣象資料');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [currentCity]); // 💡 關鍵：只要切換城市，就自動重新抓取最新的天氣

  return (
    <div style={{
      maxWidth: '500px', 
      margin: '40px auto', 
      padding: '30px', 
      borderRadius: '20px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
      border: '1px solid rgba(255,255,255,0.15)',
      color: '#fff',
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '25px', letterSpacing: '2px' }}>
        🌍 全球天氣儀表板
      </h2>

      {/* 城市切換按鈕區 */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '30px', flexWrap: 'wrap' }}>
        {Object.keys(CITIES).map(cityName => (
          <button
            key={cityName}
            onClick={() => setCurrentCity(cityName)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
              backgroundColor: currentCity === cityName ? '#38ef7d' : 'rgba(255,255,255,0.2)',
              color: currentCity === cityName ? '#111' : '#fff',
              transition: '0.3s'
            }}
          >
            {CITIES[cityName].icon} {cityName}
          </button>
        ))}
      </div>

      {/* 條件渲染：Loading 狀態 */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '40px 0', fontSize: '18px' }}>
          🌀 正在連線衛星氣象站...
        </div>
      )}

      {/* 條件渲染：Error 狀態 */}
      {error && !loading && (
        <div style={{ textAlign: 'center', color: '#ff4d4f', padding: '20px', backgroundColor: 'rgba(255,77,79,0.1)', borderRadius: '10px' }}>
          ⚠️ 錯誤: {error}
        </div>
      )}

      {/* 條件渲染與資料渲染：成功拿到資料 */}
      {!loading && !error && weatherData && (
        <div style={{ textAlign: 'center', animation: 'fadeIn 0.5s' }}>
          <h1 style={{ fontSize: '64px', margin: '10px 0', fontWeight: '300' }}>
            {weatherData.temperature}°C
          </h1>
          <h3 style={{ margin: '0 0 20px 0', opacity: 0.8 }}>
            📍 目前位置：{currentCity}
          </h3>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '15px', 
            background: 'rgba(0,0,0,0.15)', 
            padding: '15px', 
            borderRadius: '12px' 
          }}>
            <div>
              <small style={{ opacity: 0.6, display: 'block' }}>💨 即時風速</small>
              <strong style={{ fontSize: '18px' }}>{weatherData.windspeed} km/h</strong>
            </div>
            <div>
              <small style={{ opacity: 0.6, display: 'block' }}>🧭 風向角度</small>
              <strong style={{ fontSize: '18px' }}>{weatherData.winddirection}°</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;