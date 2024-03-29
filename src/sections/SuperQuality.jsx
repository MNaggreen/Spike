import { shoe8 } from '../assets/images'
import { Button } from '../components'

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          Мы Предлагаем
          <span className="text-coral-red"> Супер </span>
          <span className="text-coral-red">Качественную </span> Обувь
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Обеспечивая высочайший комфорт и стиль, наша тщательно изготовленная
          обувь предназначена для того, чтобы улучшить ваши впечатления,
          обеспечивая вам непревзойденное качество, инновации и нотку
          элегантности.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Наше внимание к деталям и совершенству гарантирует ваше удовлетворение
        </p>
        <div className="mt-11">
          <Button label="Посмотреть" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality
