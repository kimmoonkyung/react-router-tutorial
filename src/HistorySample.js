import React, { useEffect } from 'react';

function HistorySample({ history }) {
    const goBack = () => {
        history.goBack();
        // goBack => 뒤로가기
    };
    const goHome = () => {
        history.push('/');
        // push => 특정경로 이동
    };

    const replactToHome = () => {
        history.replace('/');
        // goHome은 방문한 페이지를 기록에 남기지만
        // replace는 남기지 않는다.
    };

    useEffect(() => {
        console.log(history);
        const unblock = history.block('나갈거임 ?');
        return () => {
            unblock();
            // 컴포넌트가 언마운트 될 때
            // 이탈 방지 하는 기능을 비활성
            // alert 창 뜸.
        };
    }, [history]);

    return (
        <div>
            <button onClick={goBack}>뒤로가기</button>
            <button onClick={goHome}>홈으로 이동</button>
            {/* <button onClick={replactToHome}>홈으로 이동 (Replace)</button> */}
        </div>
    );
}

export default HistorySample;
