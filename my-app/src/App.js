//import logo from './logo.svg';
//import './App.css';
import Button from './Components/Button';
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
/*
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
*/

/*
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const movies = [
  { id: 1, title: 'Interstellar', genre: 'Sci-Fi',    year: 2014 },
  { id: 2, title: 'Your Name',    genre: 'Animation', year: 2016 },
  { id: 3, title: 'Parasite',     genre: 'Thriller',  year: 2019 },
];

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />

      //{/* Hero — ส่วนต้อนรับ */
      /*
      <header className="bg-slate-900 px-6 pb-16 pt-12 text-center">
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          ดูหนังดี ๆ ไปด้วยกัน
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-400">
          รวมหนังคุณภาพที่คัดมาแล้ว อัปเดตใหม่ทุกสัปดาห์
        </p>
      </header>
/*

      {/* เนื้อหาหลัก — การ์ดหนัง responsive */
      /*
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-10">
        <h2 className="mb-6 text-2xl font-bold text-slate-800">หนังแนะนำ</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {movies.map((m) => (
            <div key={m.id}
                 className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md
                            transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-lg font-bold text-slate-800">{m.title}</h3>
              <p className="mt-1 text-sm text-slate-500">ปี {m.year}</p>
              <span className="mt-3 inline-block rounded-full bg-cyan-50 px-3 py-1
                               text-xs font-medium text-cyan-700">{m.genre}</span>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
*/  
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import About from './pages/About';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />                {/* ← เห็นทุกหน้า */}
      <main className="flex-1">
        <Routes>                {/* ← เฉพาะตรงนี้ที่สลับตาม URL */}
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />   {/* ← ดักทุกอย่างที่เหลือ ไว้ล่างสุด */}
        </Routes>
      </main>
      <Footer />                {/* ← เห็นทุกหน้า */}
    </div>
  );
}

export default App;
