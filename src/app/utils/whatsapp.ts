export const formatWhatsAppOrder = (items: any[]) => {
    const businessPhone = '+5584998993401'

    let message = '🛍️ *Novo pedido*\n\n'

    items.forEach((item, index) => {
        message += `*${index + 1}.* ${item.name} - ${item.quantity} x R$ ${item.price.toFixed(2)}\n`
    })

    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    message += `💰 *Total: R$${total.toFixed(2)}*\n\n`
    message += '📞 Por favor, confirme este pedido e entraremos em contato com você com os detalhes de pagamento e entrega!'

    return `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`
}

export const getWhatsAppSupportUrl = () => {
    const businessPhone = '+5584998993401'
    const message = '👋 Olá! Tenho uma pergunta sobre este produto. Você poderia me ajudar?'
    return `https://wa.me/${businessPhone}?text=${encodeURIComponent(message)}`

}