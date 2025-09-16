import re

# Read the file
with open('src/components/classes/pso-wordle/Slides.js', 'r') as f:
    content = f.read()

# Define the discussion slides to insert
discussion_slides = '''    {
      id: 'discuss-daily-joys',
      title: 'Discuss!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Discuss!</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-left space-y-6 text-xl leading-relaxed">
                <div className="text-white font-semibold">
                  What's a small thing that instantly makes your day better?
                </div>
                
                <div className="text-white font-semibold">
                  If you had an entire day with no responsibilities, how would you spend it?
                </div>
                
                <div className="text-white font-semibold">
                  What's something simple you loved as a kid that still makes you happy now?
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    {
      id: 'discuss-proud-moments',
      title: 'Discuss!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Discuss!</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-left space-y-6 text-xl leading-relaxed">
                <div className="text-white font-semibold">
                  What's a moment when you felt genuinely proud of yourself?
                </div>
                
                <div className="text-white font-semibold">
                  What's a part of your daily life you think your younger self would find surprising?
                </div>
                
                <div className="text-white font-semibold">
                  What's a risk you took that ended up being worth it?
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-pink-600 to-red-600'
    },'''

# Find the pattern to insert after (end of title slide)
pattern = r'(\s+)\},\s*\n\s*\{\s*\n\s*id: '\''assignment-overview'\'''

# Replace with the discussion slides + the original content
replacement = r'\1},\n' + discussion_slides + '\n\n    {\n      id: '\''assignment-overview'\'''

# Make the replacement
new_content = re.sub(pattern, replacement, content, flags=re.MULTILINE | re.DOTALL)

# Write the file back
with open('src/components/classes/pso-wordle/Slides.js', 'w') as f:
    f.write(new_content)

print("Discussion slides added successfully!")
