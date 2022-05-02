const Product = require('../models/product')

// export const register = async (req, res) => {
//     console.log(req.body);

exports.read = async (req, res) => {
    const product = await Product.findOne({ orderNo: req.params.no })
        .exec()
    res.json(product)
}

exports.create = async (req, res) => {
    const { customer,
        orderDate,
        deliveryDate,
        pithaniDeliveryDate,
        orderNo,
        profil,
        profilKwd,
        typosRolou,
        tyligma,
        thesi,
        anoigmaXwrou,
        ypsosXwrou,
        proteinomenosOdhgos,
        odhgos,
        odhgosKwd,
        odhgosIndex,
        strantzarista,
        strantzaristaKwd,
        thesiStrantzaristou,
        gwniesSthrijhs,
        platosStrantzaristou,
        vathosStrantzaristou,
        katharoAnoigma,
        katharoYpsos,
        proteinomenoiAksones,
        aksonas,
        aksonasKwd,
        aksonasIndex,
        aksonasPahos,
        aksonasMhkos,
        aksonaki,
        aksonakiKwd,
        aksonakiIndex,
        aksonakiKouzinetou,
        aksonakiKouzinetouKwd,
        aksonakiKouzinetouIndex,
        maxIndexF60,
        maxIndexF76,
        proteinomenaElathria,
        elathrioA,
        elathrioAkwd,
        elathrioAtem,
        elathrioB,
        elathrioBkwd,
        elathrioBtem,
        elathrioC,
        elathrioCkwd,
        elathrioCtem,
        shmaies,
        shmaiesKwd,
        ypsosShmaias,
        mhkosShmaias,
        proteinomenoKouti,
        proteinomenosTablas,
        tablades,
        tabladesKwd,
        koutia,
        koutiaKwd,
        lamakiaMonofKoutiou,
        telikoYpsosRolou,
        fases,
        tzamakia,
        perieliksi,
        mhkosProfilKophs,
        plithosAgyriwn,
        proteinomenoPlithosAgyriwn,
        resultHook,
        agyria,
        agyriaKwd,
        resultGuideOverSide,
        thikesSthrijhsOdhgwn,
        ypodiairesh,
        ypodiaireshKwd,
        ypsosMeiwthra,
        arhikoYpsosKourtinas,
        plithosProfil,
        varosKourtinas,
        sxesh,
        moter,
        moterKwd,
        moterThesi,
        thesiParoxhsReumatos,
        proteinomenoKouzineto,
        kouzineto,
        kouzinetoKwd,
        apasfaliseis,
        apasfaliseisKwd,
        packaging,
        koutiaXwrisSkotia,
        steganopoihshTampla,
        anypsotikoMeso1,
        anypsotikoMeso2,
        anypsotikoMeso3,
        anypsotikoMeso4,
        ilektrologikhEgatastash1,
        ilektrologikhEgatastash2,
        ilektrologikhEgatastash3,
        ilektrologikhEgatastash4,
        ilektrologikhEgatastash5,
        tainiaSyskevasias,
        tampelaSimansis,
        kleidariaAsfaleias,
        antianemia,
        stopRolou,
        xeirolavh,
        vashSthrhjis,
        vashSthrijhsKwd,
        plithosVasewnSthrijhsOdhgou,
        xrwma,
        proteraiothta,
        diastashThikisSthrijhsOdhgwn,
        kolonaSthrijhsOdhgwn,
        ypsosOdhgou,
        epipleonYpsos,
        diastashKolonasSthrijhsOdhgwn,
        lamaSthrijhs80x10,
        gwniaSthrijhs80x10,
        gwniaSthrijhs80x80,
        aerasProfilOdhgou,
        arParaggelias2,
        ypsosDokariou,
        parasouter,
        parathyraki,
        proteinomenhShmaia,
        kwdikosProteinomenhsShmaias,
        indexProteinomenhsShmaias,
        proteinomenesFases,
        ypsosDokou,
        ypsosStrantzaristou,
        plastikesTapesKwd,
        pahosTapas,
        telikoYpsosKourtinas,
        epifaneiaEgatastashs,
        J322,
        G311,
        mhkosSpiral } = req.body
    // console.log('In controller, receiving', req.body)

    try {
        const newProduct = await new Product({
            customer,
            orderDate,
            deliveryDate,
            pithaniDeliveryDate,
            orderNo,
            profil,
            profilKwd,
            typosRolou,
            tyligma,
            thesi,
            anoigmaXwrou,
            ypsosXwrou,
            proteinomenosOdhgos,
            odhgos,
            odhgosKwd,
            odhgosIndex,
            strantzarista,
            strantzaristaKwd,
            thesiStrantzaristou,
            gwniesSthrijhs,
            platosStrantzaristou,
            vathosStrantzaristou,
            katharoAnoigma,
            katharoYpsos,
            proteinomenoiAksones,
            aksonas,
            aksonasKwd,
            aksonasIndex,
            aksonasPahos,
            aksonasMhkos,
            aksonaki,
            aksonakiKwd,
            aksonakiIndex,
            aksonakiKouzinetou,
            aksonakiKouzinetouKwd,
            aksonakiKouzinetouIndex,
            maxIndexF60,
            maxIndexF76,
            proteinomenaElathria,
            elathrioA,
            elathrioAkwd,
            elathrioAtem,
            elathrioB,
            elathrioBkwd,
            elathrioBtem,
            elathrioC,
            elathrioCkwd,
            elathrioCtem,
            shmaies,
            shmaiesKwd,
            ypsosShmaias,
            mhkosShmaias,
            proteinomenoKouti,
            proteinomenosTablas,
            tablades,
            tabladesKwd,
            koutia,
            koutiaKwd,
            lamakiaMonofKoutiou,
            telikoYpsosRolou,
            fases,
            tzamakia,
            perieliksi,
            mhkosProfilKophs,
            plithosAgyriwn,
            proteinomenoPlithosAgyriwn,
            resultHook,
            agyria,
            agyriaKwd,
            resultGuideOverSide,
            thikesSthrijhsOdhgwn,
            ypodiairesh,
            ypodiaireshKwd,
            ypsosMeiwthra,
            arhikoYpsosKourtinas,
            plithosProfil,
            varosKourtinas,
            sxesh,
            moter,
            moterKwd,
            moterThesi,
            thesiParoxhsReumatos,
            proteinomenoKouzineto,
            kouzineto,
            kouzinetoKwd,
            apasfaliseis,
            apasfaliseisKwd,
            packaging,
            koutiaXwrisSkotia,
            steganopoihshTampla,
            anypsotikoMeso1,
            anypsotikoMeso2,
            anypsotikoMeso3,
            anypsotikoMeso4,
            ilektrologikhEgatastash1,
            ilektrologikhEgatastash2,
            ilektrologikhEgatastash3,
            ilektrologikhEgatastash4,
            ilektrologikhEgatastash5,
            tainiaSyskevasias,
            tampelaSimansis,
            kleidariaAsfaleias,
            antianemia,
            stopRolou,
            xeirolavh,
            vashSthrhjis,
            vashSthrijhsKwd,
            plithosVasewnSthrijhsOdhgou,
            xrwma,
            proteraiothta,
            diastashThikisSthrijhsOdhgwn,
            kolonaSthrijhsOdhgwn,
            ypsosOdhgou,
            epipleonYpsos,
            diastashKolonasSthrijhsOdhgwn,
            lamaSthrijhs80x10,
            gwniaSthrijhs80x10,
            gwniaSthrijhs80x80,
            aerasProfilOdhgou,
            arParaggelias2,
            ypsosDokariou,
            parasouter,
            parathyraki,
            proteinomenhShmaia,
            kwdikosProteinomenhsShmaias,
            indexProteinomenhsShmaias,
            proteinomenesFases,
            ypsosDokou,
            ypsosStrantzaristou,
            plastikesTapesKwd,
            pahosTapas,
            telikoYpsosKourtinas,
            epifaneiaEgatastashs,
            J322,
            G311,
            mhkosSpiral
        })
            .save()
        // console.log(('product Created', newProduct));
        res.json(newProduct)
    } catch (err) {
        // console.log('CREATE Rolo FAILED', err);
        // console.log('CREATE Rolo FAILED message:', err.message);
        let err1
        let cleanMessage = err.message.split('failed:')[1] // βγήκε το Product validation failed: 
        console.log('cleanMessage', cleanMessage)

        // check if more than 1 error messages
        if (cleanMessage.includes(',')) {
            err1 = cleanMessage.split(',')[0]
            // console.log('When 2 messages, getting', err1)
        }
        else {
            // console.log('When 1 message', cleanMessage)
            err1 = cleanMessage
        }

        // bring out error field / error message
        let errField = err1.split(':')[0].trim()
        let errMessage = err1.split(':')[1].trim()

        console.log('Error field:', errField)
        console.log('Error message:', errMessage)
        // let err2 = err.message.split('*')[1]
        // console.log('err1 err2', err1, err2)
        // console.log('Επιστρέφω σφάλμα', err1)

        // Πίνακας με όλα τα πεδία που έχουν error -> πως το διαβάζουν στον client?
        // let allErrors = err.message.split(':')
        // let removeFirst = allErrors.splice(0, 1)
        // let removeLast = allErrors.pop()

        // allErrors.forEach(e => {
        //     var n = e.split(" ");
        //     console.log(n[n.length - 1]);
        //     myErrors.unshift(n[n.length - 1].trim())
        // })
        // return res.status(400).send({ err: err1 })
        return res.status(400).send({ errField: errField, errMessage: errMessage })
        // return res.status(400).send({ err: err1 })
        // return res.status(400).send({ err: allErrors })
    }
}

// Eνώ επιστρέφει κανονικά data, τελικά δεν μπορώ να σώσω το res.data
// οπότε έβαλα τον κώδικα στο Productions.js
exports.getCusProducts = async (req, res) => {
    const { customer } = req.body
    console.log('in controller, customer: ', req)

    try {
        let products = await Product.find({ customer }) // .populate('category')
            // .limit(parseInt(req.params.count)) // count from route
            // .populate('category') // mongo for 'join'
            // .populate('subs') // same
            // .sort([['createdAt', 'desc']])
            .exec()
        // console.log('Sending back', products) OK
        res.json(products)
    } catch (err) {
        console.log(err);
    }
}

// using Product model
exports.lastOrder = async (req, res) => {
    let lastOrder;

    // try {
    //     lastOrder = await Product.find({}, function (err, docs) {
    //         console.log('In controller, latest orderNo:', docs.orderNo)

    //     })
    //         .sort([['orderNo', 'desc']])
    //         .limit(1)
    //         .exec()
    //     // lastorder ? res.json(lastOrder) : res.json(0)
    // } catch (err) {
    //     console.log(err);
    // }


    Product.findOne({}, {}, { sort: { 'createdAt': -1 } }, function (err, post) {
        // post && console.log('In controller, latest ', post);
        post && console.log('So, latest orderNo', post.orderNo)
        if (!post) { console.log('Collection does not exist') }
        err && console.log('Error in controller', err)
        post ? res.json(post.orderNo) : res.json(0)
    });
}

exports.delProduct = async (req, res) => {
    const { orderNo } = req.body
    console.log('You are deleting', orderNo)
    try {
        let deleted = await Product.findOneAndDelete({ orderNo: orderNo })
            .exec()
        return res.status(200).send('ok')
    } catch (err) {
        console.log(err);
        return res.status(400).send("Product delete failed");
    }
}
