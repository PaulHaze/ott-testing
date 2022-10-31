import { Anton } from '@next/font/google';

const anton = Anton({
  weight: '400',
});

type HeaderProps = {
  text: string;
};

export function Header({ text = 'Test Header' }: HeaderProps) {
  return (
    <div className="w-full py-6 pl-10 border-l-[16px] border-cyan-800 bg-gradient-to-r from-blue-300/60 to-blue-400/40">
      <h1
        data-testid="header"
        className={`${anton.className} text-cyan-800 text-5xl`}
      >
        {text}
      </h1>
    </div>
  );
}
