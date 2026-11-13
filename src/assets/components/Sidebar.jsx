export default function Sidebar({ questions, myAnswers }) {

     function iconSelect(type) {
        switch(type) {
            case 'error':
                return <ion-icon name="close-circle"  style={{ color: "#FF3030" }}></ion-icon> ;
            case 'almost':
                return <ion-icon name="checkmark-circle" style={{ color: "#FF922E" }}></ion-icon>;
            case 'zap':
                return <ion-icon name="checkmark-circle" style={{ color: "#2FBE34" }}></ion-icon>;
        }
    }

    return (
        <div className="sidebar">
            <h1>{myAnswers.length}/{questions.length} CONCLUÍDOS</h1>
            <div>
                {myAnswers.map(value => (
                    iconSelect(value)
                ))}
            </div>

        </div>
    );
}

