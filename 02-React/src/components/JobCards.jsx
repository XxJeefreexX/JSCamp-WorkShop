import jobs from "../assets/jobs.json";

const JobCards = () => {
  return (
    <div>
      <section className="job-search">
        <h1>Encuentra tu próximo trabajo</h1>
        <p>Explora las miles de posibilidades</p>
        <form>
          <div className="search-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#fff"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10 2a8 8 0 1 0 5.29 14.71l4.3 4.3 1.42-1.42-4.3-4.3A8 8 0 0 0 10 2zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" />
            </svg>
            <input
              type="search"
              name=""
              id=""
              placeholder="Buscar empleos, empresas..."
            />
          </div>

          <div className="search-filters">
            <select className="select-options" name="tecnologias" id="tecnologias">
              <option value="">
                Tecnología
              </option>
              <option value="javaScript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>
            <select className="select-options" name="ubicacion" id="ubicacion">
              <option value="">
                Ubicación
              </option>
              <option value="remoto">Remoto</option>
              <option value="madrid">Madrid</option>
              <option value="mexico">México</option>
            </select>
            <select
              className="select-options"
              name="tipo-contrato"
              id="tipo-contrato"
            >
              <option value="">
                Contrato
              </option>
              <option value="temporal">Temporal</option>
              <option value="indefinido">Indefinido</option>
              <option value="practicas">Prácticas</option>
            </select>
            <select
              className="select-options"
              name="nivel-experiencia"
              id="nivel-experiencia"
            >
              <option value="">
                Experiencia
              </option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
              <option value="manager">Manager</option>
            </select>
          </div>
        </form>
      </section>

      <section className="job-results">
        <h2>Resultados de búsqueda</h2>
        <div className="job-listings">
          {jobs.map((job, index) => (
            <article className="job-offer" key={job.id ?? index}>
              <div>
                <h3>{job.title}</h3>
                <small>{job.company} | {job.location}</small>
                <p>{job.description}</p>
              </div>
              <button className="button-aply-job">Aplicar</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobCards;
