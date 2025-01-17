import { useState, type FC } from "react";
import { Form } from "./Form";
import { RenderCertificate } from "./RenderCertificate";

interface CreateImageProps {
  url: string
}


export const CreateImage: FC<CreateImageProps> = ({ url }) => {
  const [name, setName] = useState("My Friend");
  const [isSpacingAndGlyphs, setIsSpacingAndGlyphs] = useState(false);

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
