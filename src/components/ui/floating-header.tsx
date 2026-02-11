import React from 'react';
import { MenuIcon } from 'lucide-react';
import { Sheet, SheetContent, SheetFooter } from '@/components/ui/sheet';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import logoVitalinQ from "../../assets/images/logos/logo-vitalinq.svg";

export function FloatingHeader() {
	const [open, setOpen] = React.useState(false);

	const links = [
		{
			label: 'Início',
			href: '#inicio',
		},
		{
			label: 'Como Funciona',
			href: '#passos',
		},
		{
			label: 'Quem Somos',
			href: '#confianca',
		},
		{
			label: 'Áreas',
			href: '#areas-terapeuticas',
		},
		{
			label: 'Segurança',
			href: '#seguranca',
		},
	];

	return (
		<header
			className={cn(
				'fixed top-2 left-0 right-0 z-[9999]',
				'mx-auto w-full max-w-7xl rounded-2xl',
				'bg-[#191919]/95 supports-[backdrop-filter]:bg-[#191919]/80 backdrop-blur-lg',
				'px-4',
			)}
		>
			<nav className="mx-auto flex items-center justify-between p-1.5">
				<a href="/" className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100">
					<img src={logoVitalinQ.src} alt="VitalinQ" className="h-[52px] w-auto" />
				</a>
				<div className="hidden items-center gap-1 lg:flex">
					{links.map((link) => (
						<a
							key={link.href}
							className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }), 'text-white hover:text-white')}
							href={link.href}
						>
							{link.label}
						</a>
					))}
				</div>
				<div className="flex items-center gap-2">
					<Button size="sm" className="text-white" asChild>
						<a href="#contato">Contato</a>
					</Button>
					<Sheet open={open} onOpenChange={setOpen}>
						<Button
							size="icon"
							variant="outline"
							onClick={() => setOpen(!open)}
							className="lg:hidden"
						>
							<MenuIcon className="size-4" />
						</Button>
						<SheetContent
							className="bg-[#191919]/95 supports-[backdrop-filter]:bg-[#191919]/80 gap-0 backdrop-blur-lg border-white/10"
							showClose={false}
							side="left"
						>
							<div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
								{links.map((link) => (
									<a
										key={link.href}
										className={cn(buttonVariants({
											variant: 'ghost',
											className: 'justify-center',
										}), 'text-white hover:text-white hover:bg-[#673de6]/20 w-full')}
										href={link.href}
										onClick={() => setOpen(false)}
									>
										{link.label}
									</a>
								))}
							</div>
							<SheetFooter>
								<Button variant="outline" className="text-white border-white/30 hover:bg-[#673de6]/20 hover:text-white" asChild>
									<a href="#confianca">Quem Somos</a>
								</Button>
								<Button className="text-white" asChild>
									<a href="#contato">Fale Conosco</a>
								</Button>
							</SheetFooter>
						</SheetContent>
					</Sheet>
				</div>
			</nav>
		</header>
	);
}
