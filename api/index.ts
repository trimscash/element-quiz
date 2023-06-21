import express from "express";
import fs from "fs";
import { parse } from "csv-parse/sync";

const csvHeaders = {
  atomic_num: 0,
  symbol: 1,
  name: 2,
  origin_of_name: 3,
  group: 4,
  period: 5,
  block: 6,
  standard_atomic_weight: 7,
  density: 8,
  melting_point: 9,
  boiling_point: 10,
  abundance_in_crust: 11,
  origin: 12,
  phase_at_rt: 13,
};

const data = fs.readFileSync("./resource/elements.csv");
const records = parse(data);
const elements_num = 118;

const app = express();
const port = 4000;

const out_of_index = "out_of_index";

let now_date = new Date().getDay();

let today_atom = getRandom(1, elements_num + 1);

setInterval(() => {
  const date = new Date().getDay();
  if (date != now_date) {
    today_atom = getRandom(1, elements_num + 1);
    now_date = date;
  }
}, 1000 * 60);

// return ramdom int min~max-1
function getRandom(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min));
}

function get_hint(atom_num: number, hint_index: number): string {
  if (0 < atom_num && atom_num <= elements_num) {
    if (0 <= hint_index && hint_index <= csvHeaders.phase_at_rt) {
      return records[atom_num][hint_index];
    }
  }
  return out_of_index;
}

function get_ans(atom_num: number): string {
  const ans_index = csvHeaders.symbol;
  if (0 < atom_num && atom_num <= elements_num) {
    return records[atom_num][ans_index];
  }
  return out_of_index;
}

// CORSを許可する
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// get today's atom
app.get("/", (req, res) => {
  res.send('{"todays_atom": "' + today_atom + '"}');
});

app.get("/:atom_num(\\d+)/:hint_index(\\d+)", (req, res) => {
  const atom_num = Number(req.params.atom_num);
  const hint_index = Number(req.params.hint_index);

  const hint = get_hint(atom_num, hint_index);
  if (hint != out_of_index) {
    res.send('{"hint": "' + hint + '", "hint_index": "' + hint_index + '"}');
    return;
  }

  res.status(404).send(out_of_index);
  return;
});

app.get("/:atom_num(\\d+)/answer/:ans", (req, res) => {
  const atom_num = Number(req.params.atom_num);
  const player_ans = req.params.ans || "";
  const ans = get_ans(atom_num);

  if (ans != out_of_index) {
    if (ans == player_ans) {
      res.send('{"result":"correct","answer": "' + ans + '"}');
      return;
    } else {
      res.send('{"result":"incorrect","answer": ""}');
      return;
    }
  }

  res.status(404).send(out_of_index);
  return;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
