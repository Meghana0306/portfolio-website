const arts: any = {
    'art1.jpg': { name: 'art1', description: 'Lorem Ipsum' },
    'art2.jpg': { name: 'art2', description: 'Lorem Ipsum' },
    'art3.jpg': { name: 'art3', description: 'Lorem Ipsum' },
    'art4.webp': { name: 'art4', description: 'Lorem Ipsum' },
    'art5.jpg': { name: 'art5', description: 'Lorem Ipsum' },
    'art6.jpg': { name: 'art6', description: 'Lorem Ipsum' },
    'art7.jpg': { name: 'art7', description: 'Lorem Ipsum' },
    'art8.jpg': { name: 'art8', description: 'Lorem Ipsum' },
    'art9.jpg': { name: 'art9', description: 'Lorem Ipsum' },
    'art10.jpg': { name: 'art10', description: 'Lorem Ipsum' }
}

const illustrations: any = {
    'illustration1.png': { name: 'illustration1', description: 'Lorem Ipsum' },
    'illustration2.png': { name: 'illustration2', description: 'Lorem Ipsum' },
    'illustration3.png': { name: 'illustration3', description: 'Lorem Ipsum' },
    'illustration4.png': { name: 'illustration4', description: 'Lorem Ipsum' },
    'illustration5.png': { name: 'illustration5', description: 'Lorem Ipsum' },
    'illustration6.png': { name: 'illustration6', description: 'Lorem Ipsum' },
    'illustration7.png': { name: 'illustration7', description: 'Lorem Ipsum' },
    'illustration8.png': { name: 'illustration8', description: 'Lorem Ipsum' },
    'illustration9.png': { name: 'illustration9', description: 'Lorem Ipsum' },
    'illustration10.png': { name: 'illustration10', description: 'Lorem Ipsum' },
    'illustration11.png': { name: 'illustration11', description: 'Lorem Ipsum' },
    'illustration12.png': { name: 'illustration12', description: 'Lorem Ipsum' },
    'illustration13.png': { name: 'illustration13', description: 'Lorem Ipsum' },
    'illustration14.png': { name: 'illustration14', description: 'Lorem Ipsum' },
    'illustration15.png': { name: 'illustration15', description: 'Lorem Ipsum' },
    'illustration16.png': { name: 'illustration16', description: 'Lorem Ipsum' },
    'illustration17.png': { name: 'illustration17', description: 'Lorem Ipsum' }
}

const animations: any = {
    'animation1.mp4': { name: 'animation1', description: 'Lorem Ipsum' },
    'animation2.gif': { name: 'animation2', description: 'Lorem Ipsum' },
    'animation3.mp4': { name: 'animation3', description: 'Lorem Ipsum' },
    'animation4.mp4': { name: 'animation4', description: 'Lorem Ipsum' },
    'animation5.mp4': { name: 'animation5', description: 'Lorem Ipsum' },
    'animation6.mp4': { name: 'animation6', description: 'Lorem Ipsum' },
    'animation7.mp4': { name: 'animation7', description: 'Lorem Ipsum' },
    'animation8.mp4': { name: 'animation8', description: 'Lorem Ipsum' },
    'animation9.png': { name: 'animation9', description: 'Lorem Ipsum' },
    'animation10.mp4': { name: 'animation10', description: 'Lorem Ipsum' },
    'animation11.png': { name: 'animation11', description: 'Lorem Ipsum' },
    'animation12.mp4': { name: 'animation12', description: 'Lorem Ipsum' },
    'animation13.mp4': { name: 'animation13', description: 'Lorem Ipsum' },
    'animation14.mp4': { name: 'animation14', description: 'Lorem Ipsum' }
}

const drawings: any = {
    'life1.jpg': { name: 'life1', description: 'Lorem Ipsum' },
    'life2.jpg': { name: 'life2', description: 'Lorem Ipsum' },
    'life3.jpeg': { name: 'life3', description: 'Lorem Ipsum' },
    'life4.jpeg': { name: 'life4', description: 'Lorem Ipsum' },
    'life5.jpg': { name: 'life5', description: 'Lorem Ipsum' },
    'life6.jpg': { name: 'life6', description: 'Lorem Ipsum' },
    'life7.jpg': { name: 'life7', description: 'Lorem Ipsum' },
    'life8.jpg': { name: 'life8', description: 'Lorem Ipsum' },
    'life9.jpg': { name: 'life9', description: 'Lorem Ipsum' },
    'life10.jpg': { name: 'life10', description: 'Lorem Ipsum' },
    'life11.jpeg': { name: 'life11', description: 'Lorem Ipsum' },
    'life12.jpg': { name: 'life12', description: 'Lorem Ipsum' },
    'life13.jpg': { name: 'life13', description: 'Lorem Ipsum' },
    'life14.jpeg': { name: 'life14', description: 'Lorem Ipsum' },
    'life15.jpeg': { name: 'life15', description: 'Lorem Ipsum' },
    'life16.jpeg': { name: 'life16', description: 'Lorem Ipsum' },
    'life17.jpeg': { name: 'life17', description: 'Lorem Ipsum' },
    'life18.jpeg': { name: 'life18', description: 'Lorem Ipsum' },
    'life19.jpeg': { name: 'life19', description: 'Lorem Ipsum' },
    'life20.jpeg': { name: 'life20', description: 'Lorem Ipsum' }
}

const miscellaneous: any = {
    'miscellaneous1.mp4': { name: 'miscellaneous1', description: 'Lorem Ipsum' },
    'miscellaneous2.mp4': { name: 'miscellaneous2', description: 'Lorem Ipsum' },
    'miscellaneous3.jpg': { name: 'miscellaneous3', description: 'Lorem Ipsum' },
    'miscellaneous4.mp4': { name: 'miscellaneous4', description: 'Lorem Ipsum' },
    'miscellaneous5.mp4': { name: 'miscellaneous5', description: 'Lorem Ipsum' }
}

const brand: any = {
    'brand1.jpg': { name: 'brand1', description: 'Lorem Ipsum' },
    'brand2.gif': { name: 'brand2', description: 'Lorem Ipsum' },
    'brand3.png': { name: 'brand3', description: 'Lorem Ipsum' },
    'brand4.png': { name: 'brand4', description: 'Lorem Ipsum' },
    'brand5.png': { name: 'brand5', description: 'Lorem Ipsum' },
    'brand6.mp4': { name: 'brand6', description: 'Lorem Ipsum' },
    'brand7.png': { name: 'brand7', description: 'Lorem Ipsum' }
}

const configs: any = {
    arts: arts,
    illustrations: illustrations,
    animations: animations,
    drawings: drawings,
    miscellaneous: miscellaneous,
    brand: brand
}

export const getImagesForPath = (path: string): any => {
    const resource = getResource(path)
    let images: any = {};
    resource.keys().map((item: any, _: any) => {
        const name = item.replace('./', '')
        images[name] = {
            url: resource(item),
            data: configs[path][name]
        };
    });
    return images;
}

const getResource = (path: string): any => {
    switch (path) {
        case 'arts':
            return require.context('../assets/arts', false, /\.(mp4|gif|webp|png|jpe?g|svg)$/)
        case 'illustrations':
            return require.context('../assets/illustrations', false, /\.(mp4|gif|webp|png|jpe?g|svg)$/)
        case 'drawings':
            return require.context('../assets/drawings', false, /\.(mp4|gif|webp|png|jpe?g|svg)$/)
        case 'animations':
            return require.context('../assets/animations', false, /\.(mp4|gif|webp|png|jpe?g|svg)$/)
        case 'miscellaneous':
            return require.context('../assets/miscellaneous', false, /\.(mp4|gif|webp|png|jpe?g|svg)$/)
        case 'brand':
            return require.context('../assets/brand', false, /\.(mp4|gif|webp|png|jpe?g|svg)$/)

    }
}