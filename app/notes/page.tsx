import css from "./NotesPage.module.css"
import NotesCient from "./Notes.client"

export default function Home() {

  

  return (
    <div className={css.app}>
      <NotesCient/>
    </div>
  )
}
