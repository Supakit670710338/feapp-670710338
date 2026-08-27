import logo from './logo.svg';
//import './App.css';

/*function App() {
  const name = 'Lapatrada';
  const year = 2026;

  return (
    <div>
      <h1>สวัสดี {name}!</h1>
      <p>ปีนี้คือปี {year} อีก 4 ปีจะเป็นปี {year + 4}</p>
      <p>ตอนนี้เวลา {new Date().toLocaleTimeString('th-TH')}</p>
    </div>
  );
}*/
/*import Header from './Components/Header';
import MovieList from './Components/MovieList';
import Footer from './Components/Footer';
import Greeting from './Components/Greeting';
import Card from './Components/Card';
const students = [
  { id: 1, name: 'ฝน',   year: 3 },
  { id: 2, name: 'เต้ย', year: 2 },
  { id: 3, name: 'มายด์', year: 4 },
];
function App() {
  return (
    <div>
      <Card title="ประกาศ">
      <p>สัปดาห์หน้าเรียนเรื่อง <b>State & Forms</b></p>
      <p>อย่าลืม push การบ้านขึ้น GitHub!</p>
      </Card>

       <h1>รายชื่อนักศึกษา</h1>
      {students.map((s) => (
        <Greeting key={s.id} name={s.name} year={s.year} />
      ))
      }
    </div>
  );
}
export default App;*/

import ProfileCard from './Components/ProfileCard';
import './App.css';

const members = [
  { id: 670710211, name: 'ลภัสรดา เกษรบัว', nickname: 'แพร',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },

  { id: 2, name: 'สมชาย สุดยอด', nickname: 'ชาย',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'หมา'] },

  { id: 3, name: 'สมหญิง ใจดี', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;