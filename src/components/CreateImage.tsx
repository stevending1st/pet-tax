import { useEffect, useState, type FC } from "react";
import { Form } from "./Form";
import { RenderCertificate } from "./RenderCertificate";


export const CreateImage: FC<{}> = () => {
  const [name, setName] = useState("My Friend");
  const [isSpacingAndGlyphs, setIsSpacingAndGlyphs] = useState(false);
  const [url, setUrl] = useState<string>();

  useEffect(() => {
    // 获取当前页面URL
    setUrl(window.location.origin + window.location.pathname);
  }, []);

  return <div className="w-full p-10 flex flex-col md:flex-row md:items-start items-center">
    <div className="flex-none max-w-80">
      <RenderCertificate
        origin={url}
        name={name}
        isSpacingAndGlyphs={isSpacingAndGlyphs}
      />
    </div>

    <div className="flex-auto">
      <Form name={name} onChangeName={setName} onChangeIsSpacingAndGlyphs={setIsSpacingAndGlyphs} />
    </div>
  </div>
}
