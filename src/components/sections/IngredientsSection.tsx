
interface IngredientCardProps {
  title: string;
  description: string;
  benefits: string[];
}

const IngredientCard: React.FC<IngredientCardProps> = ({ title, description, benefits }) => (
  <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-cyan-100 shadow-sm flex flex-col justify-between">
    <div>
      <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-4 text-brand-cyan font-bold">
        {title.slice(0, 2)}
      </div>
      <h4 className="font-bold text-brand-dark text-lg mb-2">{title}</h4>
      <p className="text-xs text-gray-500 mb-4">{description}</p>
    </div>
    <ul className="space-y-1.5 border-t border-gray-100 pt-3">
      {benefits.map((b, i) => (
        <li key={i} className="text-xs text-brand-dark font-medium flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full" /> {b}
        </li>
      ))}
    </ul>
  </div>
);

export const IngredientsSection: React.FC = () => {
  const cards: IngredientCardProps[] = [
    {
      title: 'Hyaluronic Acid',
      description: 'Rich in vitamins and fatty acids for ultimate curl definition and softness.',
      benefits: ['Deep Hydration', 'Moisture Lock', 'Plump Curls'],
    },
    {
      title: 'Coconut Oil',
      description: 'Natural nourishment that penetrates hair shaft to strengthen and protect.',
      benefits: ['Hair Strength', 'Natural Shine', 'Frizz Control'],
    },
    {
      title: 'Avocado Extract',
      description: 'Rich in vitamins and fatty acids for cuticle sealing and lasting moisture.',
      benefits: ['Curl Definition', 'Softness', 'Nutrient Rich'],
    },
  ];

  return (
    <section className="bg-brand-softBlue py-20 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-cyan-600 font-semibold mb-2">
            Premium Ingredients
          </p>
          <h3 className="text-3xl font-serif font-bold text-brand-dark">
            Powered by <span className="text-brand-cyan">Nature's</span> Best Ingredients
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((c, i) => (
            <IngredientCard key={i} {...c} />
          ))}
        </div>

        <div className="bg-white rounded-xl p-4 border border-cyan-100 flex flex-wrap items-center justify-around gap-4 text-xs font-medium text-gray-600">
          <span>✓ No SLS</span>
          <span>✓ No Silicones</span>
          <span>✓ No Parabens</span>
          <span>✓ Cruelty Free</span>
          <span>✓ Natural Extracts</span>
        </div>
      </div>
    </section>
  );
};