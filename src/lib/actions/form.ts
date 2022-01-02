import { onDestroy } from "svelte"

export const enhance = (form: HTMLFormElement, {result}) => {

    const submitForm = async (event: Event) => {
        event.preventDefault()
        try {
            const body = new FormData(form)
            const res = await fetch(form.action, {
                method: form.method,
                headers: {
                    accept: "application/json"
                },
                body
            })

            if(res.ok){
                result(res, form)
            }

        } catch (error) {
            console.error(error)
        }
    }

    form.addEventListener("submit", submitForm)

    onDestroy(() => {
        form.addEventListener("submit", submitForm)
    })

}