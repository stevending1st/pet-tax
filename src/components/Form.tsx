import type { FC } from "react";

import "@chinese-fonts/lxgwwenkai/dist/LXGWWenKai-Bold/result.css";

interface RenderFormProps {
  name?: string;
  onChangeName?: (name: string) => any;
  onChangeIsSpacingAndGlyphs?: (isSpacingAndGlyphs: boolean) => any;
}

function downloadSVGAsPNG(svgId: string, filename: string) {
  // 获取SVG元素
  const svgElement = document.getElementById(svgId);

  if (svgElement) {
    // 将SVG转换为XML字符串
    const svgXML = new XMLSerializer().serializeToString(svgElement);
    // 创建一个Image对象以加载SVG数据
    const img = new Image();
    img.height = 990 * 3;
    img.width = 700 * 3;
    // 创建一个Blob和URL来处理图像数据
    const svgBlob = new Blob([svgXML], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    img.src = url;

    // 当图像加载完成时，绘制到Canvas上并转换为PNG
    img.onload = function () {
      // 创建Canvas元素
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;

      // 绘制SVG图像到Canvas
      const ctx = canvas.getContext('2d');
      ctx?.drawImage(img, 0, 0);

      // 将Canvas内容转换为PNG格式的数据URL，并创建下载链接
      const pngDataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = pngDataUrl;
      link.download = filename || 'download.png';
      link.style.display = 'none';

      // 触发点击事件进行下载
      link.click();

      // 清理
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };

    // 设置Image的src属性，触发加载
    img.src = url;
  }
}

export const Form: FC<RenderFormProps> = ({ name, onChangeName, onChangeIsSpacingAndGlyphs }) => {
  return <>
    <h1 className="font-extrabold text-2xl">Pet Tax Payment Confirmation Maker（宠物税交纳确认书制作器）</h1>

    <article className="mt-6" style={{ fontFamily: "LXGW WenKai" }}>
      <p>尊敬的朋友(Dear Friend)，</p>

      <p className="mt-4">欢迎您来到这里！我们提供一个<span className="text-red-500 font-extrabold">免费</span>服务，为您的网络邻居定制宠物税缴纳确认书，以表达对他们分享宠物照片或视频的感谢。</p>
      <p>Welcome to here! You can <span className="text-red-500 font-extrabold">freely</span> customize a Pet Tax Certificate for your Internet neighbors as a way to thank them for sharing photos or videos of their pets.</p>

      <p className="mt-4">只需三步轻松完成宠物税确认书的制作：</p>
      <p>Creating your Pet Tax Acknowledgment Certificate is easy with just three steps:</p>

      <ol className="mt-4 ml-5 list-decimal">
        <li className="mt-3">
          <p>输入您网络邻居的昵称；</p>
          <p>Enter the nickname of your Internet neighbor;</p>
          <input placeholder="My friend" className="w-full border-b-2 border-blue-500" onChange={({ currentTarget }) => onChangeName?.(currentTarget.value)} />
        </li>
        <li className="mt-4">
          <p>若名字过长，请勾选下方框以确保信息完整；</p>
          <p>If the name is too long, check the box below to ensure completeness;</p>
          <div className="mt-1">
            <input type="checkbox" id="isSpacingAndGlyphs" onChange={({ currentTarget: { checked } }) => { onChangeIsSpacingAndGlyphs?.(checked) }} />
            <label htmlFor="isSpacingAndGlyphs">
              姓名显示自动调整（Automatic adjustment of name display）
            </label>
          </div>
        </li>
        <li className="mt-4">
          <p>点击下载按钮，获取并发送证书给您的网络邻居。</p>
          <p>Click the download button to obtain and send the certificate to your Internet neighbor.</p>

          <button className="bg-sky-300 py-2 px-4 mt-1 rounded-xl" onClick={()=> downloadSVGAsPNG("pet-tax-certificate-svg", `${name || "MyFriend"}_PetTaxCertificate`)}>立即下载（Download Now）</button>
        </li>
      </ol>

      <p className="mt-4">感谢您使用我们的服务，也感谢您在网络社区中与邻居们保持友好交流。祝您一切顺心如意！</p>
      <p>Thank you for using our service, and for fostering friendly communication with your neighbors within the online community. Best wishes for all your endeavors!</p>

      <p className="text-right">
        Yours sincerely
      </p>
      <p className="text-2xl text-right" style={{ fontFamily: 'Dancing Script Variable' }}>
        stevending1st
      </p>
    </article>
  </>
}
