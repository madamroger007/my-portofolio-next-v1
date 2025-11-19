import React from "react"
interface Card {
  className?: string
}
interface Children {
  children: React.ReactNode
}

type Experience = {
  id: string;
  title: string;
  name_institution: string;
  description: string | null;
  time_start: string;
  time_end: string;
  category_id: string;
  createdAt: string;
  updatedAt: string;
  category_name: string | null;
}


type Certification = {
  id: string;
  title: string;
  link_cert: string;
  name_institution: string;
  time_cert: string;
  createdAt: string;
  updatedAt: string;
}