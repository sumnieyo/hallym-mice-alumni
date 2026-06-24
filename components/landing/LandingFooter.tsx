import Image from "next/image";
import Link from "next/link";

/** 랜딩 푸터 — 다크. 약관/처리방침 동의 문구 보존(가입 고지 맥락). */
export function LandingFooter() {
  return (
    <footer className="landing-footer border-t border-white/10 bg-black px-6 py-14 text-white">
      <div className="mx-auto flex max-w-screen-lg flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="landing-footer-logos flex flex-wrap items-center gap-6">
          <Image
            src="/brand/hallym-university-logo.png"
            alt="한림대학교"
            width={177}
            height={55}
            className="h-10 w-auto object-contain sm:h-11"
          />
          <Image
            src="/brand/hallym-graduate-studies-signature.png"
            alt="한림국제대학원대학교"
            width={449}
            height={165}
            className="h-12 w-auto object-contain sm:h-14"
          />
        </div>
        <p className="text-xs leading-relaxed text-white/50">
          시작하면{" "}
          <Link href="/terms" className="underline underline-offset-4 hover:text-white">
            이용약관
          </Link>{" "}
          및{" "}
          <Link href="/privacy" className="underline underline-offset-4 hover:text-white">
            개인정보 처리방침
          </Link>
          에 동의하게 됩니다. · 만 14세 이상 가입 가능.
        </p>
      </div>
    </footer>
  );
}
