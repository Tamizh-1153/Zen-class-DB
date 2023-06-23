const mongoose = require("mongoose")
const express = require("express")
const app = express()
const Tasks = require("./models/tasks")
const Topics = require("./models/topics")
const Users = require("./models/user")
const companyDrives = require("./models/companyDrives")
const Attendance = require("./models/attendance")
const Codekata = require("./models/codekata")
const Mentors = require("./models/mentor")

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tamizh1153:abcd123@cluster0.eojvxoa.mongodb.net/Zen-database",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    app.listen(5000, () => {
      console.log("Server is listening on port 5000...")
    })
  } catch (e) {
    console.log(e)
  }
}

start()

const find = async () => {
  const result = await Mentors.aggregate([
    [
      {
        $match: {
          $expr: {
            $gt: [
              {
                $size: "$mentee",
              },
              15,
            ],
          },
        },
      },
      {
        $project: {
          Mentor_name: "$name",
          _id: 0,
        },
      },
    ],
  ])
  console.log(result)
}

find()

// const find = async () => {
//   const mentor = await Mentors.create({
//     name: "Alexandra",
//     mentee: [
//       "Büşra",
//       "Marcell",
//       "Mahavira",
//       "Louis",
//       "Alphonsus",
//       "Donato",
//       "Lotus",
//     ]

//   })

//   console.log(mentor)
// }
//find()

// const result = await Attendance.aggregate([
//   {
//     $match: {
//       date: {
//         $gte: new Date("Thu, 15 Oct 2020 00:00:00 GMT"),
//         $lte: new Date("Sat, 31 Oct 2020 00:00:00 GMT"),
//       },
//     },
//   },
//   {
//     $lookup: {
//       from: "tasks",
//       localField: "date",
//       foreignField: "date",
//       as: "taskNotSubmitted",
//     },
//   },
//   {
//     $unwind: {
//       path: "$taskNotSubmitted",
//     },
//   },
//   {
//     $project: {
//       absent: 1,
//       _id: 0,
//       taskNotSubmitted: "$taskNotSubmitted.notSubmitted",
//     },
//   },
// ])
// console.log(result)
