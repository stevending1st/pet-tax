import type { FC, PropsWithChildren } from "react"
import { QRCodeSVG } from 'qrcode.react';
import '@fontsource-variable/dancing-script';
import "@chinese-fonts/lxgwwenkai/dist/LXGWWenKai-Bold/result.css";

interface RenderCertificateProps {
  origin?: string;
  isSpacingAndGlyphs?: Boolean;
  name?: string;
}

export const RenderCertificate: FC<PropsWithChildren<RenderCertificateProps>> = ({ origin,isSpacingAndGlyphs = false, name= "My friend" }) => {
  console.log("origin", origin)
  return <>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 700 990">
      {/* 背景 */}
      <rect width="100%" height="100%" fill="#ffffff" rx="20" />

      {/* 边框 */}
      <rect x="5%" y="5%" width="90%" height="90%" stroke="#555555" fill="none" stroke-width="4" />

      {/* 中文标题 */}
      <text fontSize="40" fontFamily="Arial" textAnchor="middle" fontWeight={900} fill="#000000">
        <tspan x="50%" y="240">证明</tspan>
        <tspan x="50%" y="285">CERTIFICATE</tspan>
      </text>

      {/* 授予文字 */}
      <text fontSize="30" fontFamily="Arial" fontWeight="800" textAnchor="middle" fill="#000000">
        <tspan x="50%" y="345">宠物税交纳确认书</tspan>
        <tspan x="50%" y="380">Pet Tax Payment Confirmation</tspan>
      </text>

      {/* 授予文字 */}
      <text fontSize="20" fontFamily="Arial" fontWeight="600" textAnchor="middle" fill="#000000">
        <tspan x="50%" y="430">兹证明</tspan>
        <tspan x="50%" y="455">This certifies that</tspan>
      </text>

      <text id="nameText" x="50%" y="510" fontSize="40" fontFamily="'Dancing Script Variable', 'LXGW WenKai'" fontWeight="500" textAnchor="middle" fill="#000000" >
        {isSpacingAndGlyphs ? <tspan textLength="70%" lengthAdjust="spacingAndGlyphs">
          {name}
        </tspan>: name}
      </text>
      <line x1="15%" y1="520" x2="85%" y2="520" stroke="black" />

      {/* 正文内容 */}
      <text id="eventText" fontSize="20" fontFamily="Arial" fontWeight="600" textAnchor="middle" fill="#000000">
        <tspan x="50%" y="570">已成功缴纳宠物税</tspan>
        <tspan x="50%" y="600">has successfully paid the pet tax</tspan>
      </text>

      {/* 正文内容 */}
      <text id="bodyContent" fontSize="20" fontFamily="Arial" fontWeight="600" textAnchor="middle" fill="#000000">
        <tspan x="50%" y="655">提交的宠物照片/视频已被认可，</tspan>
        <tspan x="50%" y="680">此账号现已获得继续在本平台活动的许可。</tspan>
        <tspan x="50%" y="710">The submitted pet photo/video has been
        </tspan>
        <tspan x="50%" y="730">accepted, and this account is now</tspan>
        <tspan x="50%" y="750">authorized to continue activities on this platform.</tspan>
      </text>

      {origin && <>
        <QRCodeSVG x="80" y="870" width={50} height={50} value="https://reactjs.org/" />
        <text id="qrcode" fontSize="15" fontFamily="Arial" fontWeight="600" textAnchor="start" fill="#000000">
          <tspan x="140" y="885">
            扫描二维码制作你的证书
          </tspan>
          <tspan x="140" y="905">
            Scan the QR code to
          </tspan>
          <tspan x="140" y="920">
            create your certificate.
          </tspan>
        </text>
      </>}
    </svg>
  </>
}
