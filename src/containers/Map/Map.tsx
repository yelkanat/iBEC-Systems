import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";

export const Maps: React.FC = () => {
  const mapData = {
    center: [43.250977, 76.947301],
    zoom: 10,
  };

  return (
    <div className="body-container-maps">
      <YMaps>
        <div>
          <Map defaultState={mapData} width="100%" height="700px">
            <Placemark
              geometry={[43.264165, 76.92991]}
              properties={{
                balloonContent: "Мега Центор Алматы",
                hintContent: "Мега Центор Алматы",
              }}
              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            />
            <Placemark
              geometry={[43.230582, 76.945995]}
              options={{ preset: "islands#circleDotIcon" }}
            />
          </Map>
        </div>
      </YMaps>
    </div>
  );
};
