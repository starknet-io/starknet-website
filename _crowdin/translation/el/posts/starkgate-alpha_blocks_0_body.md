### TL;DR

* Η πρώτη έκδοση του StarkNet Bridge, StarkGate Alpha, είναι ζωντανή σε**[Testnet](https://goerli.starkgate.starknet.io/)**, και**[Mainnet](https://starkgate.starknet.io/)**!
* Αναμένουμε την ανατροφοδότηση της κοινότητας σχετικά με το πώς μπορούν να βελτιωθούν τα πράγματα. Μπορείτε να στείλετε τα σχόλιά σας τόσο για[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)όσο και[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).
* Η ανάπτυξη του Mainnet θα ακολουθήσει σύντομα (ενημέρωση, 9 Μαΐου 2022: Το StarkGate είναι ζωντανό στο Mainnet)

Ενθουσιασμός! Είμαστε ενθουσιασμένοι να κυκλοφορήσουμε το StarkGate Alpha, την πρώτη έκδοση της Γέφυρας του StarkNet, τώρα ζουν στο Goerli testnet, με την ανάπτυξη του Mainnet να ακολουθήσει σύντομα.*

\*(ενημέρωση, 9 Μαΐου 2022: Το StarkGate είναι ζωντανό στο Mainnet)

**Σημαντική αποποίηση ευθυνών: αυτή είναι μια έκδοση άλφα στο StarkGate Alpha (διαβάστε το λεπτό εκτύπωσης παρακάτω!).**

![](/assets/starkgate_01.png)

Πριν συνεχίσετε, πηγαίνετε να το ελέγξετε! [StarkGate Testnet](https://goerli.starkgate.starknet.io/),[StarkGate Mainnet](https://starkgate.starknet.io/)

Το StarkGate λειτουργεί ως πύλη μεταξύ Ethereum και[StarkNet](https://starknet.io/)και επιτρέπει στους χρήστες να κάνουν ό,τι μπορούν να περιμένουν από μια γέφυρα.

#### **Πού μπορώ να βρω πληροφορίες σχετικά με το πώς λειτουργεί το StarkGate?**

Για να καταλάβετε πώς λειτουργεί η StarkGate, διαβάστε την[τεχνική τεκμηρίωση](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge)και ρίξτε μια ματιά στον κώδικα[](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate). Σημειώστε ότι αυτή είναι η πρώτη έκδοση, και προσκαλούμε τα σχόλιά σας και τις προτάσεις σας για το πώς να βελτιώσετε τόσο το[StarkGate Testnet](https://forms.reform.app/starkware/StarkGate_Feedback/yhyalh)όσο και το[StarkGate Mainnet](https://forms.reform.app/TeRuSp/StarkGate-Feedback-Mainnet/bcoscx).

#### **Ποια νομίσματα θα υποστηρίζονται από StarkGate?**

* Το StarkGate Alpha στο Goerli υποστηρίζει ETH και μερικά άλλα ERC-20 tokens. Ο πλήρης κατάλογος και οι σχετικές διευθύνσεις της σύμβασης, τόσο στο Ethereum όσο και στο StarkNet, είναι διαθέσιμα σε αυτή την[repo](https://github.com/starkware-libs/starknet-addresses).
* Η StarkGate Alpha θα στηρίξει αρχικά το ETH μόνο για να επιτρέψει τη χρήση του μηχανισμού τελών. Αργότερα, θα προσθέσουμε υποστήριξη για WBTC, USDC, USDT, και DAI. Μπορείτε να δείτε τις σχετικές διευθύνσεις συμβολαίου σε αυτό το[repo](https://github.com/starkware-libs/starknet-addresses/blob/master/bridged_tokens/mainnet.json).

Περαιτέρω στο δρόμο, θα δημοσιεύσουμε τον μηχανισμό για την προσθήκη υποστήριξης για πρόσθετα νομίσματα.

#### **Τι περιορισμούς ασφαλείας θα StarkGate Alpha έχουν στο Mainnet?**

Το StarkGate Alpha στο Mainnet ξεκινά με δύο περιορισμούς — προκειμένου να μειώσει τους κινδύνους που ενέχει η χρήση μιας έκδοσης Alpha:

1. Η συνολική τιμή που είναι κλειδωμένη (TVL) στη γέφυρα L1 θα περιορίσει την ποσότητα κάθε τύπου συμβόλων.
2. Το μέγιστο ποσό σε κάθε συναλλαγή που αποστέλλεται από L1 έως L2 (Ethereum→StarkNet) μέσω StarkGate θα είναι περιορισμένο.

Σχεδιάζουμε να διευκολύνουμε σταδιακά αυτούς τους περιορισμούς και να τους άρουμε εντελώς καθώς αυξάνεται η εμπιστοσύνη. Οι ενημερωμένες παράμετροι μπορούν να βρεθούν στην τεκμηρίωση[](https://docs.starknet.io/docs/L1%3C%3EL2%20Communication/token-bridge) του StarkGate.

![](/assets/starkgate_02.png)

### Άλφα και τι σημαίνει

Όπως πάντα, σας υπενθυμίζουμε ότι το StarkNet βρίσκεται επί του παρόντος στο**Alpha**στάδιο:

* Τα πράγματα μπορούν να σπάσουν. Εάν αποτύχουν καταστροφικά, τα κεφάλαιά σας θα μπορούσαν να χαθούν (**διαβάστε την αποποίηση ευθύνης κάτω από**!).
* Τόσο οι συμβάσεις StarkNet Alpha όσο και StarkGate μπορούν να αναβαθμιστούν χωρίς χρονοδιάγραμμα. Ενώ αναμένουμε να ανακοινώσουμε αυτές τις αναβαθμίσεις πολύ νωρίς, σε περίπτωση επικείμενων κινδύνων για την ασφάλεια (για παράδειγμα, αν βρεθεί ένα κρίσιμο σφάλμα), η αναβάθμιση μπορεί να εφαρμοστεί με μικρή ή καθόλου προειδοποίηση.
* Ο κώδικας της γέφυρας, καθώς και τμήματα της StarkNet Alpha, δεν έχει ακόμη ελεγχθεί. Οι έλεγχοι της StarkGate Alpha θα ολοκληρωθούν σύντομα.

Ενθαρρύνουμε όλους τους χρήστες να βοηθήσουν στη βελτίωση της γέφυρας παρέχοντας τα σχόλιά τους χρησιμοποιώντας μία από τις ακόλουθες πλατφόρμες:

1. [StarkGate frontend repo](https://github.com/starkware-libs/starkgate-frontend)
2. [StarkGate Συμβάσεις repo](https://github.com/starkware-libs/starkgate-contracts/tree/main/src/starkware/starknet/apps/starkgate)
3. [StarkNet Shamans](http://community.starknet.io/)

Για ερωτήσεις και υποστήριξη από προγραμματιστές, εγγραφείτε στο[StarkNet discord server](https://discord.gg/uJ9HZTUk2Y).

### Αποποίηση

***Το StarkNet Alpha είναι ένα νέο και σύνθετο σύστημα που δεν έχει ελεγχθεί πλήρως. Το ίδιο ισχύει και για τη Γέφυρα StarkNet. Όπως όλα τα σύνθετα συστήματα λογισμικού, τόσο το StarkNet όσο και η γέφυρα μπορεί να περιέχουν σφάλματα που, σε ακραίες περιπτώσεις, θα μπορούσε να οδηγήσει σε απώλεια όλων των κεφαλαίων σας. Έτσι,***πέλμα προσεκτικά και beware!******

*Το οικοσύστημα StarkNet είναι ένα μεγάλο και ταχέως αναπτυσσόμενο σύνολο ανεξάρτητων ομάδων και ατόμων, για το οποίο το StarkWare δεν έχει εποπτεία και δεν αναλαμβάνει καμία ευθύνη. Οποιοδήποτε από τα έργα που αναπτύσσονται από μέλη του οικοσυστήματος μπορεί να περιέχει σφάλματα που, σε ακραίες περιπτώσεις, θα μπορούσαν να οδηγήσουν σε απώλεια όλων των κεφαλαίων σας. Επιπλέον, καθώς αναπτύσσονται περισσότερες έξυπνες συμβάσεις, οι δυνατότητες για ακούσια επιβλαβή σφάλματα και ακόμη και κακόβουλες απάτες και χαλί τραβά αυξάνεται. Έτσι, αντιμετωπίστε όλα τα έξυπνα συμβόλαια στο StarkNet όπως αντιμετωπίζετε έξυπνα συμβόλαια στο Ethereum, and use only those that you have good reason to trust as secure.*