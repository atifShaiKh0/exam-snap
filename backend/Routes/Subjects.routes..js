import express from 'express'
import { getSubject,addSubject,updateSubject,deleteSubject, getSubjectByName } from '../controller/Subjects.controller'

const router = express.Router()

router('/getSubject',getSubject)

router('getSubjectByName',getSubjectByName)

router('/addSubject',addSubject)

router('/updateSubject',updateSubject)

router('/deleteSubject/:id',deleteSubject)

