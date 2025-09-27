import ProfileCard from './ProfileCard';

function App() {
  return (
    <div style={{ padding: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center'}}>
      <ProfileCard name="Wender" age={20}isStudent={true} />
      <ProfileCard name="Gui" age={19} isStudent={true} />
      <ProfileCard name="Iara" age={23} isStudent={false} />
      <ProfileCard name="Andrey" age={21} isStudent={true} />
      <ProfileCard name="Matheus" age={25} isStudent={false} />
      <ProfileCard name="Samuel" age={20} isStudent={true} />
      <ProfileCard name="Ana" age={22} isStudent={true} />
      <ProfileCard name="Jeanderson" age={27} isStudent={false} />
      <ProfileCard name="Vinicius" age={24} isStudent={false} />
      <ProfileCard name="Miguel" age={18} isStudent={true} />
      <ProfileCard name="Raquel" age={26} isStudent={false} />
      <ProfileCard name="Yara" age={19} isStudent={true} />
    </div>
  );
}

export default App;
