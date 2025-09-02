import { Trees, Droplets, Users, Heart } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

const amazonFacts = [
	{
		id: 1,
		icon: <Trees className="h-12 w-12 text-primary" />,
		title: 'Pulmão do Mundo',
		description:
			'A Amazônia produz 20% do oxigênio mundial e abriga 10% de toda biodiversidade conhecida',
		image:
			'https://images.unsplash.com/photo-1677773755572-06dbee8256b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWF6b24lMjByYWluZm9yZXN0JTIwY2Fub3B5JTIwYWVyaWFsfGVufDF8fHx8MTc1NjU3NzY3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
		number: '20%',
		delay: 0.2,
	},
	{
		id: 2,
		icon: <Droplets className="h-12 w-12 text-secondary" />,
		title: 'Ciclo das Águas',
		description:
			'Revela o clima global através do ciclo hidrológico, influenciando chuvas em todo continente',
		image:
			'https://images.unsplash.com/photo-1703778544732-dc5ad0cc2ea2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWF6b24lMjB3aWxkbGlmZSUyMGJpb2RpdmVyc2l0eSUyMG5hdHVyZXxlbnwxfHx8fDE3NTY1Nzc2ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
		number: '8%',
		delay: 0.4,
	},
	{
		id: 3,
		icon: <Users className="h-12 w-12 text-primary" />,
		title: 'Povos Originários',
		description:
			'Lar de mais de 300 etnias indígenas que preservam conhecimentos ancestrais há milênios',
		image:
			'https://images.unsplash.com/photo-1729392195221-be832ed5554e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWF6b24lMjByaXZlciUyMGluZGlnZW5vdXMlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzU2NTc3Njg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
		number: '300+',
		delay: 0.6,
	},
]

const statistics = [
	{ label: 'Espécies de plantas', value: '80,000+', icon: <Trees className="h-6 w-6" /> },
	{ label: 'Espécies de animais', value: '2,000+', icon: <Heart className="h-6 w-6" /> },
	{ label: 'Área em milhões km²', value: '5.5M', icon: <Droplets className="h-6 w-6" /> },
	{ label: 'Etnias indígenas', value: '300+', icon: <Users className="h-6 w-6" /> },
]

export function OffersSection() {
	const [counters, setCounters] = useState(statistics.map(() => 0))

	useEffect(() => {
		const animateCounters = () => {
			statistics.forEach((stat, index) => {
				const finalValue = parseInt(stat.value.replace(/[^\d]/g, ''))
				const duration = 2000
				const steps = 60
				const increment = finalValue / steps
				let currentValue = 0

				const timer = setInterval(() => {
					currentValue += increment
					if (currentValue >= finalValue) {
						currentValue = finalValue
						clearInterval(timer)
					}

					setCounters((prev) => {
						const newCounters = [...prev]
						newCounters[index] = Math.floor(currentValue)
						return newCounters
					})
				}, duration / steps)
			})
		}

		const timeout = setTimeout(animateCounters, 500)
		return () => clearTimeout(timeout)
	}, [])

	return (
		<section
			id="amazon-info"
			className="py-20 px-4 bg-gradient-to-b from-muted/30 to-muted/60 relative overflow-hidden"
		>
			{/* Background Animation */}
			<motion.div
				className="absolute inset-0 opacity-5"
				animate={{
					backgroundPosition: ['0% 0%', '100% 100%'],
				}}
				transition={{
					duration: 20,
					ease: 'linear',
					repeat: Infinity,
					repeatType: 'reverse',
				}}
				style={{
					backgroundImage:
						'radial-gradient(circle, #4A5D23 1px, transparent 1px)',
					backgroundSize: '50px 50px',
				}}
			/>

			<div className="container mx-auto relative z-10">
				{/* Header Section */}
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					<motion.h2
						className="text-4xl md:text-5xl lg:text-6xl mb-6"
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
					>
						A Majestade da
						<motion.span
							className="block text-primary"
							animate={{
								backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
							}}
							transition={{
								duration: 3,
								ease: 'easeInOut',
								repeat: Infinity,
							}}
							style={{
								background: 'linear-gradient(90deg, #4A5D23, #6B8E3D, #4A5D23)',
								backgroundSize: '200% 200%',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								backgroundClip: 'text',
							}}
						>
							Amazônia
						</motion.span>
					</motion.h2>
					<motion.p
						className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						viewport={{ once: true }}
					>
						Mais que uma floresta, a Amazônia é o coração pulsante do nosso planeta.
						Descobra por que ela é essencial para a vida na Terra e como nossos
						produtos carregam sua essência ancestral.
					</motion.p>
				</motion.div>

				{/* Main Facts Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
					{amazonFacts.map((fact, index) => (
						<motion.div
							key={fact.id}
							className="group relative"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: fact.delay }}
							viewport={{ once: true }}
							whileHover={{ y: -8, scale: 1.02 }}
						>
							<div className="bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50">
								<div className="aspect-[16/10] relative overflow-hidden">
									<ImageWithFallback
										src={fact.image}
										alt={fact.title}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
									<motion.div
										className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md rounded-full p-4"
										whileHover={{ scale: 1.1, rotate: 5 }}
										transition={{ type: 'spring', stiffness: 300 }}
									>
										{fact.icon}
									</motion.div>
									<motion.div
										className="absolute top-4 left-4 text-white"
										initial={{ scale: 0 }}
										whileInView={{ scale: 1 }}
										transition={{ duration: 0.5, delay: fact.delay + 0.3 }}
										viewport={{ once: true }}
									>
										<span className="text-3xl font-bold">{fact.number}</span>
									</motion.div>
								</div>

								<div className="p-4">
									<h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors">
										{fact.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{fact.description}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Statistics Counter */}
				<motion.div
					className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-border/50"
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
				>
					<motion.h3
						className="text-center text-3xl font-bold mb-8"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						viewport={{ once: true }}
					>
						A Amazônia em Números
					</motion.h3>
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
						{statistics.map((stat, index) => (
							<motion.div
								key={index}
								className="text-center group"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 * index }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05 }}
							>
								<motion.div
									className="flex justify-center mb-4"
									whileHover={{ rotate: 12, scale: 1.1 }}
									transition={{ type: 'spring', stiffness: 300 }}
								>
									<div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors text-primary">
										{stat.icon}
									</div>
								</motion.div>
								<motion.div
									className="text-4xl font-bold text-primary mb-2"
									key={counters[index]}
								>
									{stat.value.includes('+')
										? `${counters[index].toLocaleString()}+`
										: stat.value.includes('M')
										? `${(counters[index] / 1000).toFixed(1)}M`
										: counters[index].toLocaleString()}
								</motion.div>
								<p className="text-muted-foreground text-sm font-medium">
									{stat.label}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Call to Action */}
				<motion.div
					className="text-center mt-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.3 }}
					viewport={{ once: true }}
				>
					<motion.p
						className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
						whileInView={{ opacity: [0.7, 1, 0.7] }}
						transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
					>
						Cada produto que você escolhe é um voto pela preservação desta maravilha
						natural.
						<span className="text-primary font-semibold">
							{' '}
							Seja parte desta missão.
						</span>
					</motion.p>
				</motion.div>
			</div>
		</section>
	)
}