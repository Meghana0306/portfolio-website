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
    'illustration17.png': { name: 'illustration17', description: 'Lorem Ipsum' },
    'illustration18.png': { name: 'illustration18', description: 'Lorem Ipsum' }
}

const configs:any = {
    arts: arts,
    illustrations: illustrations
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
            return require.context('../assets/arts', false, /\.(webp|png|jpe?g|svg)$/)
        case 'illustrations':
            return require.context('../assets/illustrations', false, /\.(webp|png|jpe?g|svg)$/)
        case 'drawings':
            return require.context('../assets/drawings', false, /\.(webp|png|jpe?g|svg)$/)
        case 'animations':
            return require.context('../assets/animations', false, /\.(webp|png|jpe?g|svg)$/)
        case 'miscellaneous':
            return require.context('../assets/miscellaneous', false, /\.(webp|png|jpe?g|svg)$/)
        case 'brand':
            return require.context('../assets/brand', false, /\.(webp|png|jpe?g|svg)$/)

    }
}