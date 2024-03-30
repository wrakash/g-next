import { get } from "@/services";

export async function Strip() {
  const myDataQ = await get("https://prod-be.guarented.com/get-text-strip");
  return (
    <div
      className="w-full text-white grid place-content-center bg-primary h-10 text-xs md:text-base text-center"
      dangerouslySetInnerHTML={{
        __html: myDataQ.data.text,
      }}
    />
  );
}
