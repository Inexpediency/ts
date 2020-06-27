enum Membership {
    Simple,
    Standard,
    Premium,
}

const membership = Membership.Standard
const membership1 = Membership[2]
console.log(membership)
console.log(membership1)

enum SocialMedia {
    INSTAGRAM = 'Instagram',
    FACEBOOK = 'Facebook',
}

const social = SocialMedia.INSTAGRAM
console.log(social)
