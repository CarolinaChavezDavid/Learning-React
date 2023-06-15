const getImagen = async() => {

    try {

        const apiKey = 'GZt8KLXU1e8M7DyrwQLZbm2api0CBvMG';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );

    } catch (error) {
        console.error(error)
    }
    
    
    
}

 getImagen();



