import FilerobotImageEditor, {
  TABS,
  TOOLS,
} from "react-filerobot-image-editor";
import { TRANSLATIONS } from "@/constants";
const ImageEditor = () => {
  return (
    <FilerobotImageEditor
      // useBackendTranslations={false}
      translations={TRANSLATIONS}
      source="custom:E:\myAllProjects\vue\electron-vite-project\src\assets\styles\impronte_d_artista.jpg"
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
  );
};

export default ImageEditor;
