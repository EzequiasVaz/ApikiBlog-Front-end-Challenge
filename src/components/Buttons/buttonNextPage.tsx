import { UseAPI } from '../../contexts/apiContext'
import './buttonNextPage.css'
import './mediaqueries.css'
export function ButtonNextPage() {

    const { page, setPage } = UseAPI()

    return (
        <div className='container-button-next-page'>
            {<button className="button-next-page" onClick={() => {
                setPage(page + 1)
            }}>Carregar mais conteúdo</button>}
        </div>
    )
}
