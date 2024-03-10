import './Footer.css'

export function Footer({ completedCount, totalTasks, deleteAll }) {
    return(
      <>
      <div className="footer-container">
        <p> Completed <strong>{completedCount}</strong> tasks of <strong>{totalTasks}</strong></p>
        <button onClick={deleteAll}> Clear completed </button>
      </div>
      <div className="credits">
        <p><strong>Caro</strong>lina Velásquez - <strong>Lina</strong> Manjarrez</p>
      </div>
      </>
    )
}