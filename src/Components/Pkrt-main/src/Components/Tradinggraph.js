import React, { useEffect, useRef, memo } from 'react';
import "../Style/Trading.css"

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          [
            "CRYPTOCAP:MATIC|1D"
          ]
        ],
        "chartOnly": false,
        "width": "581",
        "height": "480",
        "locale": "en",
        "colorTheme": "dark",
        "autosize": false,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
        "hideMarketStatus": false,
        "hideSymbolLogo": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "fontSize": "10",
        "noTimeScale": false,
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "chartType": "area",
        "maLineColor": "#2962FF",
        "maLineWidth": 1,
        "maLength": 9,
        "backgroundColor": "rgba(25, 24, 29, 1)",
        "widgetFontColor": "rgba(255, 255, 255, 1)",
        "lineWidth": 2,
        "lineType": 0,
        "dateRanges": [
          "1d|1",
          "1m|30",
          "3m|60",
          "12m|1D",
          "60m|1W",
          "all|1M"
        ],
        "lineColor": "rgba(58, 87, 232, 1)",
        "topColor": "rgba(140, 68, 238, 1)",
        "bottomColor": "rgba(58, 87, 232, 1)"
      }`;
    container.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={container} style={{ border: 'none' }}>
      <div className="tradingview-widget-container__widget" style={{ border: 'none' }}></div>
      <div className="tradingview-widget-copyright" style={{ border: 'none' }}></div>
    </div>
  );
}

export default memo(TradingViewWidget);
