import Image from "next/image";
import Logo from "../Components/Logo";
import Button from "../Components/Buttons"

export default function Home() {
  return (
    <main>
      <div className="linksPage">
        <Logo image="./sampalho-logo.png"></Logo>
        <Button link="https://www.instagram.com/sampalho_pn/" button="Instagram - @sampalho_pn" />
        <Button link="https://www.facebook.com/sampalho/" button="Facebook" />
        <Button link="" button="Website Oficial" />
        <Button link="https://api.whatsapp.com/send/?phone=5511941433313&text&type=phone_number&app_absent=0" button="Whatsapp" />
      </div>
    </main>
  );
}
