import React from "react";
import { Resizable } from "re-resizable";
import "./videoTransfer.less";
import { useState } from "react";
import { TRANSLATIONS } from "@/constants";
import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from "react-filerobot-image-editor";
import { Layout } from "antd";
import ImageEditor from "@/components/bussiness/ImageEditor";
const { Content, Footer, Sider, Header } = Layout;
const VideoTransfer = () => {
  const [width, setWidth] = useState();
  return (
    <div className="flex h-full panel">
      <div className="flex-1 h-full bg-blue-300">
        <Resizable
          bounds="window"
          enable={{ right: true }}
          handleClasses={{ right: "left-bar" }}>
          <FilerobotImageEditor
            // useBackendTranslations={false}
            translations={TRANSLATIONS}
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
          />
        </Resizable>
      </div>
      <div className="flex-1">right</div>
      {/* <Resizable
        // bounds="parent"
        maxWidth="600px"
        minWidth="200px"
        defaultSize={{ width: 200, height: "100%" }}
        handleClasses={{ left: "left-bar" }}
        enable={{ left: true }}>
        content
      </Resizable> */}
    </div>
    // <Layout style={{ maxHeight: "100%", height: "100%" }}>
    //   <Layout>
    //     {/* <Sider>left sidebar</Sider> */}
    //     <Content>
    //       <ImageEditor />
    //     </Content>
    //     <Footer>footer</Footer>
    //   </Layout>
    //   <Sider>
    //     <Resizable
    //       // bounds="parent"
    //       maxWidth="600px"
    //       minWidth="200px"
    //       defaultSize={{ width: 200, height: "100%" }}
    //       handleClasses={{ left: "left-bar" }}
    //       enable={{ left: true }}>
    //       content
    //     </Resizable>
    //   </Sider>
    // </Layout>
  );
};

export default React.memo(VideoTransfer);
