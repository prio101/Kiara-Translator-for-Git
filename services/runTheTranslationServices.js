const runJob = () => {
    setInterval(() => {
        console.log('runTheTranslationServices');
    }, 1000);
}


export const runTheTranslationServices = async () => {
    console.log("------------------------------------------");
    try{        
        runJob();
    } catch (error) {
        console.error(error);
        runJob();
    }
}

