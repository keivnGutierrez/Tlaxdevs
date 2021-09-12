import { COLORS } from '../../const/colors';

function SvgComponent(props) {
    return (
        <>
            <div className="menu">
                <div className="fill orange"></div>
                <div className="fill pink"></div>
                <div className="fill green"></div>
            </div>
            <style jsx>{`
                .menu{
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    justify-content:center;
                    gap:3px
                }
                .menu:hover{
                    cursor:pointer;
                    opacity:.9;
                    transition:1s
                }
                .fill{
                    width:35px;
                    height:7px;
                    border-radius:10px;
                    background:red;
                    opacity:4;
                }
                .green{
                    background:${COLORS.green}
                }
                .orange{
                    background:${COLORS.tertiary}
                }
                .pink{
                    background:${COLORS.secondary}
                }
            `}</style>
        </>
    )
}

export default SvgComponent
