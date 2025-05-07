import Image from "next/image";
import Link from "next/link";

const WhatsappFloating = () => {
  return (
    <Link
      href="https://wa.me/919891774769"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 z-50 transition duration-300 ease-in-out">
        <Image src="/whatsapp.svg" alt="WhatsApp" width={30} height={30} />
      </div>
    </Link>
  );
};

export { WhatsappFloating };
