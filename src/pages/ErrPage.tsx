const ErrPage = ({err_msg}: string | any): JSX.Element => {
    return <div className="error-page">
        Error 404, cannot find page! {err_msg ? err_msg : null}
    </div>
}

export default ErrPage;