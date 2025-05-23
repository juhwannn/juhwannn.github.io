export default function Privacy() {
  return (
    <div>
    <h1>Privacy Policy – YouTube Label</h1>
    <p>
      <strong>YouTube Label</strong> (이하 "확장 프로그램")은 사용자의
      프라이버시를 중요하게 생각합니다. 이 문서는 확장 프로그램이 어떤 데이터를
      처리하는지에 대한 정보를 제공합니다.
    </p>

    <h2>1. 수집하는 정보</h2>
    <p>
      본 확장 프로그램은 다음과 같은 정보를 <strong>수집하지 않습니다</strong>:
    </p>
    <ul>
      <li>이름, 이메일, 전화번호 등 식별 가능한 개인정보</li>
      <li>IP 주소, 브라우저 정보, 운영 체제 정보</li>
      <li>로그인 상태 또는 YouTube 계정 정보</li>
    </ul>

    <h2>2. 저장되는 데이터</h2>
    <p>
      사용자가 직접 지정한 구간 정보(라벨, 시간 등)는 브라우저의
      <code>chrome.storage.local</code>에만 저장되며, 외부 서버로 전송되지
      않습니다.
    </p>
    <p>
      데이터는 오직 사용자의 기기 내에서 관리되며, 사용자가 삭제하거나
      브라우저를 재설치하지 않는 이상 유지됩니다.
    </p>

    <h2>3. 외부 공유 및 추적 없음</h2>
    <p>
      본 확장 프로그램은 데이터를 외부 서버로 전송하지 않으며, 광고, 분석, 추적
      기술도 포함하고 있지 않습니다.
    </p>

    <h2>4. 확장 프로그램 권한</h2>
    <ul>
      <li><strong>storage</strong>: 라벨 데이터를 저장하기 위해 사용됩니다.</li>
      <li>
        <strong>tabs, activeTab</strong>: 현재 YouTube 탭을 확인하여 기능을
        적용합니다.
      </li>
      <li>
        <strong>scripting</strong>: 콘텐츠 스크립트를 YouTube 페이지에
        삽입합니다.
      </li>
      <li>
        <strong>host_permissions</strong>:
        <code>https://*.youtube.com/</code> 도메인에 접근합니다.
      </li>
    </ul>

    <h2>5. 원격 코드 사용</h2>
    <p>
      모든 코드와 리소스는 확장 프로그램 내부에 포함되어 있으며, 외부 서버에서
      로드되는 원격 코드는 없습니다.
    </p>

    <h2>6. 문의</h2>
    <p>확장 프로그램 관련 문의는 아래 이메일로 연락해 주세요.</p>
    <p><strong>이메일:</strong> algorithm123@naver.com</p>

    <p>
      본 정책은 추후 변경될 수 있으며, 변경 사항은 이 페이지에 업데이트됩니다.
    </p>
    </div>
  )
}