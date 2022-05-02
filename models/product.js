const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { ObjectId } = mongoose.Schema

const productSchema = new mongoose.Schema({
    customer: {
        // type: ObjectId,
        // ref: "Customer"
        type: String,
        // trim: true,
        required: 'Παρακαλώ συμπληρώστε την Επωνυμία Πελάτη.',
    },
    orderDate: {
        type: Date,
        default: Date.now()
    },
    deliveryDate: {
        type: Date,
    },
    pithaniDeliveryDate: {
        type: Date,
    },
    orderNo: {
        type: Number
    },
    profil: {
        type: String,
        required: 'Παρακαλώ επιλέξτε Προφίλ.'
    },
    profilKwd: {
        type: String
    },
    typosRolou: {
        type: String,
        default: 'ΜΟΝΟΦΑΣΙΚΟ'
    },
    tyligma: {
        type: String,
        default: 'ΚΑΝΟΝΙΚΟ',
    },
    thesi: {
        type: String,
        default: 'ΕΝΤΟΣ ΑΝΟΙΓΜΑΤΟΣ',
    },
    anoigmaXwrou: {
        type: Number,
        default: 0,
        min: [1, 'To Άνοιγμα χώρου πρέπει να είναι μεγαλύτερο από {VALUE}'],
    },
    ypsosXwrou: {
        type: Number,
        default: 0,
        min: [1, 'To Ύψος χώρου πρέπει να είναι μεγαλύτερο από {VALUE}'],
    },
    proteinomenosOdhgos: {
        type: String
    },
    odhgos: {
        type: String
    },
    odhgosKwd: {
        type: String
    },
    odhgosIndex: {
        type: Number,
        default: 0
    },
    strantzarista: {
        type: String
    },
    strantzaristaKwd: {
        type: String
    },
    thesiStrantzaristou: {
        type: String
    },
    gwniesSthrijhs: {
        type: String,
        default: 'ΟΧΙ',
    },
    platosStrantzaristou: {
        type: Number,
        default: 0
    },
    vathosStrantzaristou: {
        type: Number,
        default: 0
    },
    katharoAnoigma: {
        type: Number,
        default: 0
    },
    // ηταν number
    // katharoYpsos: {
    //     type: Number,
    //     default: 0
    // },
    katharoYpsos: {
        type: String
    },
    proteinomenoiAksones: {
        type: String
    },
    aksonas: {
        type: String
    },
    aksonasKwd: {
        type: String
    },
    aksonasPahos: {
        type: Number,
        default: 0
    },
    aksonasMhkos: {
        type: Number,
        default: 0
    },
    aksonasIndex: {
        type: String
    },
    aksonaki: {
        type: String
    },
    aksonakiKwd: {
        type: String
    },
    aksonakiIndex: {
        type: String
    },
    aksonakiKouzinetou: {
        type: String
    },
    aksonakiKouzinetouKwd: {
        type: String
    },
    aksonakiKouzinetouIndex: {
        type: String
    },
    ypsosSimaias: {
        type: Number,
        default: 0
    },
    maxIndexF60: {
        type: Number,
        default: 0
    },
    maxIndexF76: {
        type: Number,
        default: 0
    },
    proteinomenaElathria: {
        type: String
    },
    elathrioA: {
        type: String
    },
    elathrioAkwd: {
        type: String
    },
    elathrioAtem: {
        type: Number,
        default: 2
    },
    elathrioB: {
        type: String
    },
    elathrioBkwd: {
        type: String
    },
    elathrioBtem: {
        type: Number,
        default: 2
    },
    elathrioC: {
        type: String
    },
    elathrioCkwd: {
        type: String
    },
    elathrioCtem: {
        type: Number,
        default: 2
    },
    shmaies: {
        type: String
    },
    shmaiesKwd: {
        type: String
    },
    ypsosShmaias: {
        type: String
    },
    mhkosShmaias: {
        type: Number,
        default: 0
    },
    proteinomenoKouti: {
        type: String
    },
    proteinomenosTablas: {
        type: String
    },
    tablades: {
        type: String
    },
    tabladesKwd: {
        type: String
    },
    koutia: {
        type: String
    },
    koutiaKwd: {
        type: String
    },
    lamakiaMonofKoutiou: {
        type: String
    },
    telikoYpsosRolou: {
        type: Number,
        default: 0
    },
    fases: '',
    tzamakia: '',
    perieliksi: {
        type: Number,
        default: 0
    },
    mhkosProfilKophs: {
        type: Number,
        default: 0
    },
    plithosAgyriwn: {
        type: Number,
        default: 0
    },
    resultHook: {
        type: Number,
        default: 0
    },
    agyria: {
        type: String
    },
    agyriaKwd: {
        type: String,
        default: '-'
    },
    resultGuideOverSide: {
        type: String
    },
    thikesSthrijhsOdhgwn: {
        type: String,
        default: 'OXI',
    },
    ypodiairesh: {
        type: String
    },
    ypodiaireshKwd: {
        type: String
    },
    ypsosMeiwthra: {
        type: Number,
        default: 0
    },
    // arhikoYpsosKourtinas: {
    //     type: Number,
    //     default: 0
    // },
    arhikoYpsosKourtinas: {
        type: String
    },
    plithosProfil: {
        type: Number,
        default: 0
    },
    // varosKourtinas: {
    //     type: Number,
    //     default: 0
    // },
    varosKourtinas: {
        type: String
    },
    sxesh: {
        type: String
    },
    moter: {
        type: String
    },
    moterKwd: {
        type: String
    },
    moterThesi: {
        type: String
    },
    thesiParoxhsReumatos: {
        type: String
    },
    proteinomenoKouzineto: {
        type: String
    },
    kouzineto: {
        type: String
    },
    kouzinetoKwd: {
        type: String
    },
    apasfaliseis: {
        type: String
    },
    apasfaliseisKwd: {
        type: String
    },
    packaging: {
        type: String
    },
    koutiaXwrisSkotia: {
        type: String
    },
    steganopoihshTampla: {
        type: String
    },
    anypsotikoMeso1: {
        type: String
    },
    anypsotikoMeso2: {
        type: String
    },
    anypsotikoMeso3: {
        type: String
    },
    anypsotikoMeso4: {
        type: String
    },
    ilektrologikhEgatastash1: {
        type: String
    },
    ilektrologikhEgatastash2: {
        type: String
    },
    ilektrologikhEgatastash3: {
        type: String
    },
    ilektrologikhEgatastash4: {
        type: String
    },
    ilektrologikhEgatastash5: {
        type: String
    },
    tainiaSyskevasias: {
        type: String
    },
    tampelaSimansis: {
        type: String
    },
    kleidariaAsfaleias: {
        type: String
    },
    antianemia: {
        type: String
    },
    stopRolou: {
        type: String
    },
    xeirolavh: {
        type: String
    },
    vashSthrhjis: {
        type: String
    },
    vashSthrijhsKwd: {
        type: String
    },
    plithosVasewnSthrijhsOdhgou: {
        type: Number,
        default: 0
    },
    xrwma: {
        type: Number,
        default: 0
    },
    proteraiothta: {
        type: String,
        default: 'KANONIKH'
    },
    diastashThikisSthrijhsOdhgwn: {
        type: Number,
        default: 0
    },
    kolonaSthrijhsOdhgwn: {
        type: String
    },
    ypsosOdhgou: {
        type: Number,
        default: 0
    },
    epipleonYpsos: {
        type: Number,
        default: 0
    },
    diastashKolonasSthrijhsOdhgwn: {
        type: String
    },
    lamaSthrijhs80x10: {
        type: Number,
        default: 0
    },
    gwniaSthrijhs80x10: {
        type: Number,
        default: 0
    },
    gwniaSthrijhs80x80: {
        type: Number,
        default: 0
    },
    aerasProfilOdhgou: {
        type: Number,
        default: 30
    },
    arParaggelias2: {
        type: Number,
        default: 0
    },
    ypsosDokariou: {
        type: Number,
        default: 0
    },
    parasouter: {
        type: String
    },
    parathyraki: {
        type: String
    },
    proteinomenhShmaia: {
        type: String
    },
    kwdikosProteinomenhsShmaias: {
        type: String
    },
    indexProteinomenhsShmaias: {
        type: String
    },
    proteinomenesFases: {
        type: String
    },
    plastikesTapesKwd: {
        type: String
    },
    pahosTapas: {
        type: Number,
        default: 0
    },
    plithosProfil: {
        type: Number,
        default: 0
    },
    telikoYpsosKourtinas: {
        type: Number,
        default: 0
    },
    epifaneiaEgatastashs: {
        type: String,
        default: ''
    },
    J322: {
        type: Number,
        default: 0
    },
    G311: {
        type: Number,
        default: 0
    },
    mhkosSpiral: {
        type: Number,
        default: 0
    },
},
    { timestamps: true }
)

// και έτσι έχουμε αυτόματο sequence στο πεδίο orderNo
// productSchema.plugin(AutoIncrement, { inc_field: 'orderNo' });

module.exports = mongoose.model('Product', productSchema)