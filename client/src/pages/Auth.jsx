import { Helmet } from 'react-helmet-async';

import AuthForm from '@components/Auth/AuthForm';

const Auth = () => {
  return (
    <>
      <Helmet>
        <title>@jinwoo1004/chat | LOGIN</title>
        <meta
          name="description"
          content="Socket.IO를 활용한 React 실시간 채팅 웹 애플리케이션을 이용하기 위해 로그인해주세요."
        />
      </Helmet>

      <section className="flex h-1/2 w-full overflow-hidden rounded-lg bg-white sm:w-[580px]">
        <div className="flex w-full flex-col items-center justify-center gap-8 px-20">
          <h1 className="text-center text-3xl font-semibold text-black">
            @jinwoo1004/chat | LOGIN
          </h1>
          <AuthForm />
        </div>
      </section>
    </>
  );
};

export default Auth;
