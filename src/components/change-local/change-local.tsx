import { component$, useSignal } from "@builder.io/qwik";
import { inlineTranslate, useSpeakContext } from "qwik-speak";
import { supportedLocals } from "~/speak-config";

export default component$(() => {

  // const t = inlineTranslate();
  const currentLocal = useSpeakContext().locale;
  const currentFlag = supportedLocals.find((supLocal) => supLocal.lang === currentLocal.lang)!.flag;
  const availableLang = supportedLocals.filter((supLocal) => supLocal.lang !== currentLocal.lang);

  const showAvailable = useSignal(false);

  return (
    <>
      <div class="flex flex-row justify-center">
        <div class="flex flex-col justify-center">
          <img src={currentFlag} alt={currentLocal.lang} width={40} height={40}
            class="hover:cursor-pointer"
            onClick$={() => showAvailable.value = !showAvailable.value}
          />
          {showAvailable.value && availableLang.map(avLang => (
            <img key={avLang.lang} src={avLang.flag} alt={avLang.lang} width={40} height={40}
              class="hover:cursor-pointer"
            />
          ))}
        </div>
      </div>
    </>
  )
})
