import { Resizable } from "re-resizable";
import React, { useState } from "react";
import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from "react-filerobot-image-editor";

const Example: React.FC = () => {
  return (
    <div className="flex h-full">
      {/* 这里flex-1是自动算大小的，导这里可以记录另一个面板的宽度，然后用总宽度减去之后，设置这个div的宽度 */}
      <div className="flex-1">
        <FilerobotImageEditor
          source="https://scaleflex.airstore.io/demo/stephen-walker-unsplash.jpg"
          onSave={(editedImageObject, designState) =>
            console.log("saved", editedImageObject, designState)
          }
          annotationsCommon={{
            fill: "#ff0000",
          }}
          Text={{ text: "Filerobot..." }}
          Rotate={{ angle: 90, componentType: "slider" }}
          Crop={{
            presetsItems: [
              {
                titleKey: "classicTv",
                descriptionKey: "4:3",
                ratio: 4 / 3,
                // icon: CropClassicTv, // optional, CropClassicTv is a React Function component. Possible (React Function component, string or HTML Element)
              },
              {
                titleKey: "cinemascope",
                descriptionKey: "21:9",
                ratio: 21 / 9,
                // icon: CropCinemaScope, // optional, CropCinemaScope is a React Function component.  Possible (React Function component, string or HTML Element)
              },
            ],
            presetsFolders: [
              {
                titleKey: "socialMedia", // will be translated into Social Media as backend contains this translation key
                // icon: Social, // optional, Social is a React Function component. Possible (React Function component, string or HTML Element)
                groups: [
                  {
                    titleKey: "facebook",
                    items: [
                      {
                        titleKey: "profile",
                        width: 180,
                        height: 180,
                        descriptionKey: "fbProfileSize",
                      },
                      {
                        titleKey: "coverPhoto",
                        width: 820,
                        height: 312,
                        descriptionKey: "fbCoverPhotoSize",
                      },
                    ],
                  },
                ],
              },
            ],
          }}
          tabsIds={[
            TABS.ADJUST,
            TABS.ANNOTATE,
            TABS.FILTERS,
            TABS.FINETUNE,
            TABS.RESIZE,
          ]} // or {['Adjust', 'Annotate', 'Watermark']}
          defaultTabId={TABS.ADJUST}
          defaultToolId={TOOLS.CROP}
          useBackendTranslations={false}
          // language="ch"
        />
      </div>
      <Resizable
        enable={{ left: true }}
        defaultSize={{ width: `200px`, height: "auto" }}
        boundsByDirection>
        <div>content</div>
      </Resizable>
    </div>
  );
};

export default Example;
