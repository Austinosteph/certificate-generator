import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Award } from 'lucide-react';
import { toast } from 'sonner';

interface CertificateFormProps {
	onGenerate: (name: string) => void;
}

export const CertificateForm = ({ onGenerate }: CertificateFormProps) => {
	const [name, setName] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (!name.trim()) {
			toast.error('Please enter a name');
			return;
		}

		if (name.trim().length < 2) {
			toast.error('Name must be at least 2 characters long');
			return;
		}

		onGenerate(name.trim());
		toast.success('Certificate generated successfully!');
	};

	return (
		<section className="py-16 px-4">
			<div className="container mx-auto max-w-2xl">
				<div className="bg-card rounded-2xl shadow-[var(--shadow-elegant)] border border-border p-8 sm:p-12">
					<div className="text-center mb-8">
						<div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-500/10">
							<Award className="w-8 h-8 text-blue-500" />
						</div>
						<h2 className="text-3xl font-bold text-foreground mb-2">
							Generate Your Certificate
						</h2>
						<p className="text-muted-foreground">
							Enter your name below to create a personalized certificate
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="space-y-2">
							<Label htmlFor="name" className="text-base font-medium">
								Full Name
							</Label>
							<Input
								id="name"
								type="text"
								placeholder="Enter your full name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="h-12 text-lg"
								maxLength={50}
							/>
							<p className="text-sm text-muted-foreground">
								This name will appear on your certificate
							</p>
						</div>

						<Button
							type="submit"
							className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-950 hover:opacity-80 transition-all duration-300"
							size="lg"
						>
							Generate Certificate
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
};
