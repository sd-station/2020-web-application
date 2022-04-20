export async function handleFormSubmit(event: Event) {
    event.preventDefault();
    const form = event.currentTarget as HTMLFormElement;
    const url = form.action;
    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson(url, formData);
        console.log({ responseData });
    } catch (error) {
        console.error(error);
    }
}



/**
* Helper function for POSTing data as JSON with fetch.
*
* @param {Object} options
* @param {string} options.url - URL to POST data to
* @param {FormData} options.formData - \`FormData\` instance
* @return {Object} - Response body from URL that was POSTed to
*/
async function postFormDataAsJson(url: string, formData: FormData) {

    const plainFormData = Object.fromEntries(formData.entries());
    const formDataJsonString = JSON.stringify(plainFormData);

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: formDataJsonString,
    };

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
    }

    return response.json();
}
