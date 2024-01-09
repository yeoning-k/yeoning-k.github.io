import Link from 'next/link';
import { Roboto_Mono } from 'next/font/google';
const Roboto = Roboto_Mono({ subsets: ['latin'], weight: ['700'] });

export default function Page404() {
  return (
    <div className="page404">
      <div className="page404__wrap">
        <div className="emoji">👻</div>
        <div className="guide">
          <h3 className={Roboto.className}>404</h3>
          <p className="title">원하시는 페이지를 찾을 수 없습니다</p>
          <p className="text">
            찾으려는 페이지의 주소가 잘못 입력되었거나,
            <br />
            주소의 변경 혹은 삭제로 인해 사용하실 수 없습니다.
            <br /> 입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요.
          </p>
        </div>
        <Link className="btn__go-to-Home" href="/">
          홈으로 가기
        </Link>
      </div>
    </div>
  );
}
